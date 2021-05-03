---

title: When you don't want your end-to-ends to get to the end
date: '2017-04-16 00:30:21'
tags:
- bbc
- bbc-sport
- testing
---

Here's the situation: You've got a service that's used by millions of people. You've got a great coverage of unit tests, integration tests, smoke tests and acceptance tests for it. However, in the real world, this service is combined with lots of other services to work correctly, so you need an end-to-end test suite as well to be 99.9% confident that you're safe to deploy a new version. However, if the test is truly end-to-end, it will start sending out fake test data to your millions of users every time you run it! Disaster!

## So what's this about?
I've been working at the BBC for about seven months now. I've recently moved to the Children's Web team, but for my first six months, I was with the Sport & Live Services team. Our role was basically to develop and maintain all of the underlying services and APIs used by other development teams in Sport & Live and the wider BBC. (Some of the stuff they're working on is pretty exciting and pioneering!)

One of these services we maintained was the imaginatively named Mobile Alerts for sending off push notifications to users who are subscribed to results for their favourite sports teams. When sending notifications to potentially millions of devices, you understandably want to be a bit careful about making sure it's always working correctly -- particularly as you can't 'unsend' a notification after pushing it out. There are three major risks that we have to look out for:

1. Alerts being sent out twice.
2. Alerts being sent out in the wrong order.
3. Missing data in the alert messages.

Mobile Alerts has a database (known as the '<abbr title="deduplication">deduping</abbr> database') that keeps track of what messages have already been processed to help work out if subsequent messages should be sent.

Our existing end to end test runner would simply send off a fake message and then poll the deduping database up to eight times to see if it's been sent. However, the deduping database didn't accurately reflect what messages are actually being sent out -- that's not what it's for! It wouldn't show you, for example, if a duplicate message had slipped through the net and been sent out.

So because the end to end tests weren't truly testing the system from end to end, we couldn't feel completely confident each time we deploying a new release. And building up more and more changes to a codebase without releasing it is of course very bad. The more it builds up with unreleased changes, the less confident the team is to release it.

![A diagram showing an end to end test runner sending a fake message about a goal to a sport data provider, who sends through various BBC Sport systems that process the data. They tell Mobile Alerts to send a message. However, the message is blocked from finally being sent to the message sender. The test runner keeps polling the deduping database to see if the message has appeared in there yet.](/assets/images/2017-04-16-mobile-alerts-1.png)

## Sounds bad! What did you do about it?
Understandably, the tester in our team wasn't too happy about this situation. The solution that we came up with was to make a fake message receiver for the messages in the place of the real message sending service. We called it the imaginatively named 'Mobile Alerts Test Client'.

It was just a very simple Node.js server that would receive alerts sent to it in the same format as they would be in if sent to the real message sending service. The Test Client would store up to 1000 of the most recently received messages in memory. It had a simple REST API that the test runner could use to grab them.

![A diagram similar to previous one, but a new 'fake message sender' service has been added. The test runner polls the fake message sender instead of the deduping database.](/assets/images/2017-04-16-mobile-alerts-test-client.png)

And that was it! It was a pretty simple solution, but worked like a charm. Some of our end to end tests had to be changed now that they were able to test for the correct behaviour.

It's so important to make sure your end to end tests closely reflect reality as much as possible. A good agile team should always feel confident that they can deploy the latest changes to users. If you're feeling anxious about uncaught bugs, it's well worth thinking about improving your tests.
