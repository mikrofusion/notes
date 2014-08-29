A proposal for continuous integration and deployement while maintaining business consistency

Release to acceptance every day.  Release to production every week.
Assumptions:
  * Hotfixes to production should be rare and should be reserved for critical fixes impacting the business.
  * If the release cycle is longer than a week, it becomes harder for the business to be OK waiting for fixes.  This leads to too many fixes then becoming hotfixes.
  * By releasing once a week you increase the probability that critical fixes can wait a few days and grab a seat on the release train.
  * Bugs will get introduced as code changes.  If the release cycle is longer than a week, then too many features and fixes will go into the release before it gets QA'ed / goes to production.  This increases the chances of bugs sneaking through to production.

Cut a release branch on Monday.  QA release through the week.  Release that branch on Thursday.
Assumptions:
  * Business prefers consistancy with regards to release content and release dates.
  * When you have a large team putting lots of new function into a release you need ample time to QA that release before going to production.
  * Mad scrambles are bad.
  * If you release on Friday and an issue is hit in production during or after the deploy then you have a mad scramble.
  * If you release on Monday and an issue is hit a critical issue blocking the release then you have a mad scramble.
  * Therefore, releasing on Friday or Monday is bad.

Let the business prioritize the backlog, but set expectations of delivery based on what is in the release branch, not by what is in the backlog.
Assumptions:
  * The business will allways prefer commitments over goals.
  * By the business prioritizing the backlog they stay in sync with the resource / time tradeoffs being made.
  * We are bad at predicting the future.  Priority interrupts, changing requirements, and resources shifts all impact ability to deliver.
  * When a release branch is cut, its contents are known and can be shared with the business.  Unless critical issues are hit during QA its contents should not change.
