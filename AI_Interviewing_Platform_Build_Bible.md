# AI Interviewing Platform --- Product Research & Build Bible

> **Purpose:** Single reference document for researching, designing,
> validating, and building an AI-era candidate verification platform.
>
> **Core thesis:** Do not build another generic AI interviewer. Build
> the **verification layer for AI-era hiring**.

------------------------------------------------------------------------

# 0. North Star

## One-line startup thesis

**Resume → Claims → Adaptive Challenges → Evidence → Competency → Hiring
Confidence**

## Product promise

> **We don't ask whether a candidate sounds qualified. We verify whether
> they actually can do what their resume says.**

## Core product concept

### AI Candidate Verification Platform

The AI interviewer is only the interface.

The real product is:

1.  Resume/JD understanding
2.  Competency extraction
3.  Candidate claim extraction
4.  Claim-to-proof interview planning
5.  Adaptive questioning
6.  Technical/practical verification
7.  Evidence-backed evaluation
8.  Competency graph
9.  Recruiter decision support
10. Candidate feedback and improvement

------------------------------------------------------------------------

# 1. Problem

## Market problem

AI has made candidate screening cheaper and faster, but it has created a
trust problem.

Employers need to know:

-   Does the candidate actually know the skills on the resume?
-   Did they really build the projects they claim?
-   Can they reason beyond memorized answers?
-   Can they debug?
-   Can they handle changing constraints?
-   Can they use their knowledge in realistic situations?
-   How much should a recruiter trust an AI score?

Candidates need:

-   transparent evaluation
-   fair assessment
-   useful feedback
-   accessibility
-   protection from false cheating flags
-   evaluation based on job-relevant ability

------------------------------------------------------------------------

# 2. Market Reality

## What is already becoming commoditized

Do NOT assume these are unique:

-   AI voice interviews
-   AI video interviews
-   dynamic follow-ups
-   resume-aware questions
-   JD-aware questions
-   transcripts
-   AI scoring
-   coding tests
-   AI proctoring
-   identity verification
-   recruiter dashboards
-   ATS integrations
-   candidate feedback

Major/important competitors include:

-   HireVue
-   HackerRank
-   CodeSignal
-   Talview
-   Eightfold
-   Mercor
-   Spark Hire
-   interviewing.io
-   Paradox
-   Joveo
-   Intrvio
-   Tarkflo
-   Round1
-   Hiregram
-   other emerging AI-native interview products

## Strategic conclusion

**"AI interviewer" alone is not enough differentiation.**

The differentiated category should be:

> **AI Skill Verification / Candidate Verification**

------------------------------------------------------------------------

# 3. Competitive Landscape

  --------------------------------------------------------------------------------
  Company/Product   Core strength             Threat level Opportunity
  ----------------- ---------------- --------------------- -----------------------
  HireVue           Enterprise                       10/10 Evidence/verification
                    hiring + AI                            
                    interviewing                           

  HackerRank        Technical                        10/10 Real-world engineering
                    assessment + AI                        judgment
                    interviewer                            

  CodeSignal        Technical                        10/10 Claim-to-proof +
                    assessment + AI                        evidence
                    interviewer                            

  Talview           AI interviews +                   9/10 Candidate-friendly
                    proctoring +                           verification
                    enterprise                             

  Eightfold         Talent                            9/10 Deep verification
                    intelligence +                         
                    agentic                                
                    recruiting                             

  Mercor            AI talent                         9/10 Verification/data
                    marketplace +                          infrastructure
                    expert                                 
                    evaluation                             

  Spark Hire        Video                             7/10 Technical depth
                    interviewing                           

  interviewing.io   Technical                         7/10 Automated verification
                    interview                              
                    ecosystem                              

  Paradox           Conversational                    7/10 Technical candidate
                    recruiting                             evaluation

  Joveo             AI interviewer +                  8/10 Deep competency
                    recruiting                             verification

  Intrvio           AI voice                          8/10 Claim/evidence graph
                    interviewer                            

  Tarkflo           AI screening +                    7/10 Verification moat
                    interviews                             

  Round1            AI first-round                    6/10 Deeper technical
                    screening                              assessment

  Hiregram          Candidate AI                      6/10 Employer verification
                    interview                              
                    practice                               
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 4. Key Market Evidence

## Candidate distrust

Recent Greenhouse research found:

-   63% of surveyed job seekers had experienced an AI interview.
-   38% had abandoned a hiring process because it included an AI
    interview.
-   70% said they were not clearly told upfront that AI would evaluate
    them.
-   Only 18% said employers had clear AI policies.

### Product implication

Build:

-   explicit AI disclosure
-   consent
-   transparent evaluation categories
-   explainable scoring
-   useful candidate feedback

------------------------------------------------------------------------

## AI interviews can work

Recent field research involving approximately 70,000 applicants found AI
voice interviews could improve hiring outcomes when used within a
structured process with human final decisions.

### Product implication

The problem is not:

> "AI interviewing doesn't work."

The problem is:

> "Poorly designed AI interviewing creates poor trust and weak signals."

------------------------------------------------------------------------

# 5. Candidate Pain Points

## High-priority problems

-   Robotic interviews
-   Repetitive questions
-   Weak follow-ups
-   AI misunderstanding answers
-   Accent/language issues
-   Anxiety
-   Lack of transparency
-   Unclear scoring
-   False rejection
-   AI-generated answers
-   External AI assistance
-   Proctoring false positives
-   Webcam/microphone/network problems
-   Accessibility problems
-   No meaningful feedback
-   Interview fatigue
-   One-way interviews feeling unfair

## Product response

Prefer:

-   adaptive interviews
-   candidate-specific questions
-   evidence-based scoring
-   technical verification
-   transparent reports
-   accessible modes
-   low-bandwidth fallback
-   human escalation

------------------------------------------------------------------------

# 6. Recruiter / Hiring Manager Pain Points

-   Too many applicants
-   Too many recordings to review
-   Recruiters cannot deeply evaluate technical skills
-   Engineers spend too much time interviewing
-   Low trust in AI scores
-   Weak evidence behind recommendations
-   False positives/negatives
-   Candidates using AI
-   Difficult candidate comparison
-   Difficult custom rubrics
-   AI hallucinations
-   Compliance concerns

## Core ROI statement

> **Turn 200 applicants into 20 technically verified candidates.**

The buyer pays for:

-   reduced screening time
-   better technical signal
-   consistent evaluation
-   reduced interviewer workload
-   better quality of shortlist

------------------------------------------------------------------------

# 7. Killer Feature

# Claim-to-Proof Interview

## Concept

Every important resume claim becomes something the candidate must prove.

### Example

Resume:

> Built a MERN application using MongoDB, Express, React and Node.

System creates:

### Claim: MongoDB

Ask:

-   Why MongoDB?
-   What schema did you use?
-   How did you index it?
-   What queries were slow?
-   How did you optimize them?

### Claim: JWT

Ask:

-   Where is the token generated?
-   Where is it stored?
-   Access vs refresh token?
-   What happens after expiry?
-   How would you revoke a token?

### Claim: Docker

Ask:

-   What problem did Docker solve?
-   Show the architecture.
-   Explain your Dockerfile.
-   What happens when the container fails?
-   How would you debug it?

### Claim: "I built the project"

Ask:

-   What was the hardest bug?
-   What did you initially think caused it?
-   What evidence changed your mind?
-   How did you fix it?
-   What would you redesign today?

------------------------------------------------------------------------

# 8. Why Claim-to-Proof Is Strong

Instead of trying to detect AI assistance:

> **Test whether the candidate actually understands the answer.**

Use:

-   dynamic questions
-   personalized follow-ups
-   consistency checks
-   scenario changes
-   code modification
-   debugging
-   architecture changes
-   tradeoff questions
-   explanation
-   evidence

### Example

Candidate:

> I deployed my Node app using Docker on AWS.

Follow-up chain:

1.  Which AWS service?
2.  How did deployment work?
3.  How did networking work?
4.  What happens if the instance fails?
5.  How would you scale it?
6.  What metrics would you monitor?
7.  What would you change at 20× traffic?

A candidate with genuine understanding should survive the chain.

------------------------------------------------------------------------

# 9. Interview Intelligence

## Strong signals to measure

### Technical correctness

Is the answer correct?

### Reasoning

Can the candidate explain why?

### Problem decomposition

Can they break down an ambiguous problem?

### Depth

Can they handle progressively deeper questions?

### Consistency

Do answers remain internally consistent?

### Practical judgment

Do they understand real-world constraints?

### Debugging

Can they systematically diagnose problems?

### Tradeoffs

Can they compare alternatives?

### Evidence

Can they substantiate their claims?

### Adaptability

Can they modify their solution when constraints change?

------------------------------------------------------------------------

# 10. Signals to Avoid

Do NOT make important hiring decisions based on:

-   eye contact
-   facial expressions
-   smiling
-   "confidence from face"
-   emotion recognition
-   personality inferred from voice
-   honesty inferred from gaze
-   accent
-   nervousness
-   body language

These create scientific, fairness and regulatory risks.

------------------------------------------------------------------------

# 11. Better Communication Evaluation

Do not score:

> "Candidate sounded confident."

Instead evaluate:

### Structure

Did they organize the answer?

### Relevance

Did they answer the actual question?

### Precision

Did they use appropriate terminology?

### Clarity

Could they explain a complex concept?

### Listening

Did they respond appropriately?

### Clarification

Did they ask for missing requirements?

### Conciseness

Could they communicate efficiently?

------------------------------------------------------------------------

# 12. Evidence-Backed Scoring

Never produce only:

> Technical: 78/100

Instead:

## Backend Engineering --- 4.1/5

**Question**

How would you handle JWT expiration?

**Candidate evidence**

Candidate correctly explained access and refresh tokens.

**Strength**

Understands basic authentication architecture.

**Gap**

Could not explain refresh-token rotation or revocation.

**Confidence**

High.

**Recommended follow-up**

Test secure token rotation and token theft mitigation.

------------------------------------------------------------------------

# 13. Evidence Graph

Every evaluation should connect:

``` text
Competency
    ↓
Question
    ↓
Candidate Answer
    ↓
Evidence
    ↓
Evaluation
    ↓
Confidence
    ↓
Follow-up
    ↓
Final Assessment
```

This should be one of the core internal data structures.

------------------------------------------------------------------------

# 14. Competency Model

Suggested default competency dimensions:

1.  Technical knowledge
2.  Reasoning
3.  Problem solving
4.  Communication
5.  Practical experience
6.  System design
7.  Debugging
8.  Adaptability
9.  Role-specific skills
10. Resume credibility
11. Tradeoff awareness
12. Learning ability
13. Engineering judgment

Do not force every role to use every dimension.

------------------------------------------------------------------------

# 15. Role-Specific Competencies

## Software Engineering

-   programming
-   data structures
-   algorithms
-   APIs
-   databases
-   architecture
-   debugging
-   testing
-   security
-   deployment

## DevOps

-   Linux
-   networking
-   Docker
-   Kubernetes
-   CI/CD
-   cloud
-   monitoring
-   incident response
-   troubleshooting

## Cybersecurity

-   networking
-   OSI/TCP-IP
-   OWASP
-   threat modeling
-   vulnerability analysis
-   incident response
-   authentication

## AI/ML

-   Python
-   statistics
-   ML fundamentals
-   model evaluation
-   transformers
-   RAG
-   agents
-   vector databases
-   ML system design

------------------------------------------------------------------------

# 16. Technical Interview Evolution

Old:

> LeetCode → compile → pass/fail

Better:

> Problem → reasoning → implementation → follow-up → tradeoffs

Best:

> Real scenario → reasoning → implementation → debugging → changing
> constraints → engineering judgment

------------------------------------------------------------------------

# 17. Real-World Engineering Simulation

Example:

> Production API latency increased from 100ms to 1.5 seconds.

Candidate gets:

-   logs
-   metrics
-   traces
-   code
-   database information

Candidate must:

1.  Identify possible causes
2.  Choose investigation order
3.  Request useful evidence
4.  Diagnose
5.  Explain fix
6.  Explain tradeoffs

Then change the environment:

> Database connections are now exhausted.

Candidate must adapt.

This is much harder to fake than a static question.

------------------------------------------------------------------------

# 18. Anti-Cheating Philosophy

## Avoid

> "AI detected: candidate cheated."

## Prefer

> "Integrity confidence: medium. Evidence suggests unusual response
> timing and external-context switching. Human review recommended."

More importantly:

# Design interviews so AI assistance is less useful.

Use:

-   dynamic follow-ups
-   candidate-specific scenarios
-   project verification
-   code modification
-   debugging
-   context switching
-   architecture changes
-   explanation of previous answers

------------------------------------------------------------------------

# 19. Integrity Layers

### Level 1 --- Non-invasive

-   consent
-   identity verification
-   browser events
-   tab switching
-   timing
-   interview metadata

### Level 2

-   optional screen sharing
-   controlled coding environment
-   code telemetry

### Level 3

-   stronger proctoring for high-stakes assessments

Always show:

> Signal + evidence + confidence

rather than an absolute cheating accusation.

------------------------------------------------------------------------

# 20. Candidate Experience

``` text
Sign up
  ↓
Resume upload
  ↓
Choose target job
  ↓
Skill gap analysis
  ↓
Interview preparation
  ↓
AI interview
  ↓
Technical verification
  ↓
Evidence-backed report
  ↓
Personalized learning plan
  ↓
Retake
  ↓
Progress tracking
```

------------------------------------------------------------------------

# 21. Employer Experience

``` text
Create job
  ↓
Upload JD
  ↓
Define competencies
  ↓
Invite candidates
  ↓
Candidate completes interview
  ↓
AI verifies claims
  ↓
AI evaluates competencies
  ↓
Recruiter reviews evidence
  ↓
Compare candidates
  ↓
Human decision
```

------------------------------------------------------------------------

# 22. Candidate Report

Instead of:

> 72/100

Provide:

### Strengths

-   API design
-   React
-   communication

### Weaknesses

-   authentication security
-   database indexing
-   distributed systems

### Strongest answers

Specific evidence.

### Weakest answers

Specific evidence.

### Missing concepts

Learning topics.

### Better answers

Example explanations.

### Personalized practice

5--10 new questions.

### Job readiness

> Ready for junior full-stack interviews; needs more depth in backend
> architecture.

------------------------------------------------------------------------

# 23. Employer Report

Example:

## Candidate

**Verification confidence: 91%**

### Skills

  Skill          Depth Evidence
  ------------ ------- ------------
  Python         4.5/5 Strong
  REST APIs      4.2/5 Strong
  Docker         3.8/5 Good
  AWS            2.5/5 Shallow
  Kubernetes     1.5/5 Unverified

### Risk

Candidate claims Kubernetes experience but could not explain service
discovery or deployment architecture.

### Recommended human interview

1.  Kubernetes networking
2.  Production debugging
3.  AWS architecture

------------------------------------------------------------------------

# 24. Candidate + Employer Product

Use one interview engine with two modes.

## Candidate mode

Goal:

> Learn and improve.

## Employer mode

Goal:

> Verify and shortlist.

Same underlying:

-   competency graph
-   interview engine
-   evidence engine
-   scoring engine

Different reports and permissions.

------------------------------------------------------------------------

# 25. Best Initial Customer

Start with:

## 50--1,000 employee companies hiring technical roles

Especially:

-   SaaS startups
-   product companies
-   IT services
-   staffing firms
-   RPOs
-   GCCs

Why:

-   enough hiring volume
-   real screening pain
-   limited technical interviewer bandwidth
-   less enterprise procurement friction

------------------------------------------------------------------------

# 26. Staffing / RPO Opportunity

Potentially excellent early market.

They process large candidate volumes and directly feel the cost of
screening.

Position:

> **AI technical screening infrastructure for staffing companies.**

------------------------------------------------------------------------

# 27. India Opportunity

Potentially differentiate through:

-   Indian English
-   Hindi
-   Kannada
-   Telugu
-   Tamil
-   Malayalam
-   Marathi
-   Bengali
-   low-bandwidth support
-   mobile-first interview
-   regional language support

Important:

> Language should not reduce technical competency score.

Separate:

``` text
Speech
 ↓
Semantic meaning
 ↓
Technical evaluation
```

------------------------------------------------------------------------

# 28. Accessibility

Support:

-   captions
-   transcripts
-   keyboard navigation
-   text mode
-   voice mode
-   speech accommodations
-   hearing accessibility
-   screen readers
-   extended time
-   low bandwidth
-   mobile fallback

Avoid evaluating irrelevant presentation characteristics.

------------------------------------------------------------------------

# 29. Legal / Compliance Principles

Design from day one for:

-   candidate consent
-   AI disclosure
-   purpose limitation
-   data minimization
-   retention controls
-   deletion
-   access rights
-   security
-   human oversight
-   audit logs
-   explainability
-   accommodation

Relevant areas:

-   EU AI Act
-   GDPR
-   U.S. employment discrimination law
-   disability/accessibility requirements
-   NYC AEDT rules
-   India DPDP Act and Rules

Employment AI is a high-risk regulatory area in the EU.

------------------------------------------------------------------------

# 30. Features to Avoid

Do not build:

-   facial emotion hiring
-   eye-contact scoring
-   honesty-from-gaze
-   personality-from-face
-   culture-fit-from-voice
-   nervousness penalties
-   accent penalties

Focus on job-relevant evidence.

------------------------------------------------------------------------

# 31. Product Opportunity Ranking

  Opportunity                          Demand   Defensibility   MVP   Monetization
  ---------------------------------- -------- --------------- ----- --------------
  Resume Claim Verification                10               9     8             10
  Adaptive Technical Interview             10               8     7             10
  Evidence-backed Hiring Score             10               9     7             10
  AI-resistant Technical Interview         10               9     7             10
  Engineering Judgment Simulation           9               9     6             10
  Debugging Interview Agent                 9               8     7              9
  Candidate Skill Graph                     9               9     7              9
  Interview-to-Learning                     8               8     8              8
  Multilingual India Interviewer            9               8     8              9
  Integrity Layer                          10               7     7             10
  Human Interview Copilot                   8               6     8              8
  AI Interview QA/Audit                     8               8     7              9
  Work Simulation                           9               9     5             10
  Candidate Skill Passport                  7              10     6              8
  University Placement AI                   9               7     9              8

------------------------------------------------------------------------

# 32. Top 3

## #1 Resume Claim Verification

> Does the candidate actually know what their resume says?

## #2 AI-Resilient Technical Interview

> Can the candidate demonstrate understanding despite AI availability?

## #3 Evidence-backed Hiring Intelligence

> Can the recruiter see exactly why the candidate was recommended?

------------------------------------------------------------------------

# 33. Killer Feature Candidates

1.  Resume → Claim Graph → Deep Verification
2.  AI-resistant adaptive technical interview
3.  Live debugging interview
4.  Evidence-backed competency graph
5.  Interview → personalized learning system

## Winner

# Claim-to-Proof Interview

------------------------------------------------------------------------

# 34. Core Architecture

``` text
Resume + JD
     ↓
Competency Extractor
     ↓
Claim Graph
     ↓
Interview Orchestrator
     ↓
 ┌───┼───────────────┐
 ↓   ↓               ↓
Voice Coding     Simulation
 ↓   ↓               ↓
STT Sandbox       Scenario
 └───┼───────────────┘
     ↓
Evidence Engine
     ↓
Evaluation Engine
     ↓
Competency Graph
     ↓
 ┌───┴──────────┐
 ↓              ↓
Recruiter     Candidate
Report        Report
```

------------------------------------------------------------------------

# 35. LLM vs Deterministic Architecture

## LLM

Use for:

-   question generation
-   follow-ups
-   answer interpretation
-   reasoning extraction
-   feedback
-   scenario generation
-   semantic consistency

## Deterministic

Use for:

-   unit tests
-   code execution
-   API output
-   timing
-   assessment results
-   browser events
-   integrity events
-   structured score calculations

## Human

Use for:

-   final hiring decision
-   ambiguous cases
-   disputed integrity results
-   accommodations
-   high-risk decisions

------------------------------------------------------------------------

# 36. Interview Orchestrator

Do NOT use:

``` text
LLM → "Ask next question"
```

Use:

``` text
Interview State
 ↓
Competency Coverage
 ↓
Evidence Confidence
 ↓
Candidate Performance
 ↓
Claim Status
 ↓
Next-Best-Question Policy
 ↓
LLM wording
```

Every question should have:

-   competency
-   difficulty
-   purpose
-   expected evidence
-   follow-up rules
-   success conditions
-   failure conditions

------------------------------------------------------------------------

# 37. Question State Example

``` text
Question:
Explain JWT authentication.

Competency:
Authentication

Difficulty:
2/5

If shallow:
Ask implementation question.

If strong:
Ask security question.

If excellent:
Ask architecture/tradeoff question.
```

------------------------------------------------------------------------

# 38. Adaptive State

``` text
Docker
 ↓
Basic knowledge: strong
 ↓
Implementation: strong
 ↓
Debugging: weak
 ↓
Ask debugging question
 ↓
Failure
 ↓
Ask simpler debugging question
 ↓
Estimate actual competency
```

The engine should estimate the candidate's **knowledge state**, not just
collect answers.

------------------------------------------------------------------------

# 39. Data Model

``` text
Candidate
 ├── Resume
 ├── Claims
 │    ├── Skill
 │    ├── Project
 │    ├── Experience
 │    └── Achievement
 ├── Competencies
 ├── Questions
 ├── Answers
 ├── Evidence
 ├── Challenges
 ├── Scores
 ├── Confidence
 └── Interview History
```

------------------------------------------------------------------------

# 40. Recommended MVP Stack

## Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind/shadcn

## Backend

-   Node.js
-   TypeScript

## Database

-   PostgreSQL
-   Prisma

## Vector search

-   pgvector

## AI

-   Multi-provider LLM abstraction
-   managed STT
-   managed TTS
-   real-time voice infrastructure

## Realtime

-   WebRTC/WebSocket

## Code

-   isolated container/microVM sandbox

## Storage

-   S3-compatible storage

## Auth

-   managed authentication

## Analytics

-   product analytics platform

## Observability

-   OpenTelemetry
-   structured logs

------------------------------------------------------------------------

# 41. Build vs Buy

## Build

-   interview orchestration
-   claim graph
-   competency graph
-   verification engine
-   evaluation schema
-   scoring methodology
-   evidence graph
-   recruiter experience
-   adaptive interview logic

## Buy/API initially

-   LLM
-   STT
-   TTS
-   realtime voice
-   authentication
-   storage
-   analytics
-   code execution infrastructure

------------------------------------------------------------------------

# 42. MVP --- 6 to 10 Weeks

## Must Have

### Employer

-   create job
-   upload JD
-   competency extraction
-   upload candidate resume
-   claim extraction
-   verification plan
-   invite candidate
-   recruiter report

### Candidate

-   resume
-   job
-   voice interview
-   adaptive follow-ups
-   technical verification
-   one debugging task
-   final report

### AI

-   competency extraction
-   claim extraction
-   question generation
-   adaptive follow-up
-   evaluation
-   evidence extraction
-   confidence scoring

------------------------------------------------------------------------

# 43. Nice to Have

-   coding sandbox
-   ATS integration
-   multilingual voice
-   candidate comparison
-   advanced integrity
-   system design simulation
-   recruiter analytics
-   custom rubrics

------------------------------------------------------------------------

# 44. Do NOT Build Initially

-   digital human avatar
-   facial emotion analysis
-   full ATS
-   full HRIS
-   50+ languages
-   enterprise SSO
-   complex proctoring
-   custom foundation model
-   every job category
-   huge assessment library

------------------------------------------------------------------------

# 45. MVP Interview

Target:

## 20--30 minutes

### Round 1

5-minute voice screening

### Round 2

Resume deep dive

### Round 3

Technical verification

### Round 4

Real-world scenario

### Round 5

Adaptive challenge

------------------------------------------------------------------------

# 46. Business Model

## Phase 1

Pay per completed interview.

## Phase 2

SaaS + usage.

## Phase 3

Enterprise contracts.

## Candidate

Free:

-   limited practice

Pro:

-   unlimited practice
-   job-specific interviews
-   detailed reports
-   personalized learning

Do not assume pricing; validate willingness to pay through pilots.

------------------------------------------------------------------------

# 47. Business ROI

The employer should be able to understand:

> "We reduced technical screening time by X%."

> "Recruiters reviewed X% fewer candidates manually."

> "Interview-to-shortlist quality improved."

> "Human interviewers spent X fewer hours."

Long-term:

> "Quality-of-hire improved."

------------------------------------------------------------------------

# 48. Moat

## Weak moats

-   LLM
-   voice
-   avatar
-   resume parser
-   UI
-   generic question bank

## Stronger moats

### 1. Verification data

Claim → Question → Answer → Challenge → Competency → Outcome

### 2. Competency graph

### 3. Employer calibration

### 4. Human feedback loops

### 5. Hiring outcome data

### 6. Candidate performance trajectories

------------------------------------------------------------------------

# 49. Long-Term Moat

The ideal data loop:

``` text
Interview
   ↓
Hire
   ↓
90-day performance
   ↓
6-month performance
   ↓
12-month retention
```

Then learn:

> Which interview signals actually predict successful hires?

This is potentially the strongest defensibility.

------------------------------------------------------------------------

# 50. Future Product --- Skill Passport

Potential long-term product:

## Verified Skill Passport

Example:

``` text
Python
Verified: June 2026
Depth: Advanced
Evidence: 7 assessments
Confidence: 94%
```

Candidate can grant employers access.

Do NOT build this before the core verification engine works.

------------------------------------------------------------------------

# 51. 12-Month Roadmap

## Months 1--2

-   resume parser
-   JD parser
-   competency extraction
-   voice interviewer
-   adaptive questioning
-   evidence report

## Months 3--4

-   claim verification
-   coding sandbox
-   debugging interview
-   recruiter dashboard
-   candidate report

## Months 5--6

-   ATS integration
-   candidate comparison
-   interview calibration
-   integrity signals
-   first paying customers

## Months 7--9

-   system design
-   DevOps scenarios
-   multilingual voice
-   employer-specific rubrics

## Months 10--12

-   hiring outcome tracking
-   competency graph
-   benchmark datasets
-   prediction validation

------------------------------------------------------------------------

# 52. Critical Validation Experiment

Before building a huge platform:

Recruit 50 software-engineering candidates.

Compare:

### A

Generic AI interview

### B

Claim-to-Proof interview

Have experienced engineers independently evaluate candidates.

Measure:

-   correlation with human evaluation
-   false positives
-   false negatives
-   candidate satisfaction
-   interview completion
-   evaluator agreement
-   technical depth
-   resume exaggeration detection
-   resilience to AI-generated answers

### Success condition

Your system should demonstrate materially better **hiring signal
quality**, not simply feel more human.

------------------------------------------------------------------------

# 53. North-Star Metrics

Do NOT optimize:

> "AI interviewer sounds human."

Track:

### Signal quality

-   human-evaluator correlation
-   inter-rater agreement
-   evidence confidence
-   false-positive rate
-   false-negative rate

### Hiring

-   shortlist quality
-   interview-to-offer rate
-   offer-to-join rate
-   quality-of-hire
-   90-day performance
-   retention

### Efficiency

-   recruiter hours saved
-   engineer interview hours saved
-   candidates screened per recruiter
-   cost per verified candidate

### Candidate

-   completion rate
-   satisfaction
-   feedback usefulness
-   retake improvement
-   accessibility incidents

------------------------------------------------------------------------

# 54. Risks

## 1. Incumbents copy feature

Mitigation:

Build the deeper:

> Claim → Evidence → Competency → Outcome

system.

## 2. LLM evaluation unreliable

Mitigation:

-   deterministic checks
-   structured rubrics
-   multiple evaluators
-   calibration
-   confidence
-   human escalation

## 3. Regulatory risk

Mitigation:

-   human-in-the-loop
-   transparent evidence
-   consent
-   auditability
-   no facial/emotion hiring

## 4. Candidate distrust

Mitigation:

-   AI disclosure
-   consent
-   transparency
-   candidate feedback
-   accessibility

## 5. Recruiter distrust

Mitigation:

Never say:

> "AI says 84."

Say:

> "Here is the evidence for 84."

------------------------------------------------------------------------

# 55. Product Positioning

Avoid:

> AI Interviewer

Prefer:

> AI Candidate Verification Platform

or:

> AI Skill Verification Platform

or:

> AI Technical Hiring Verification

------------------------------------------------------------------------

# 56. Possible Positioning Statements

### Option 1

> **Verify what candidates actually know.**

### Option 2

> **Turn every resume claim into evidence.**

### Option 3

> **The AI interviewer that proves, not just asks.**

### Option 4

> **Don't trust the resume. Verify it.**

### Strongest

> **We don't ask whether a candidate sounds qualified. We verify whether
> they can actually do the job.**

------------------------------------------------------------------------

# 57. Product Principles

1.  **Evidence over scores**
2.  **Job-relevant signals over personality signals**
3.  **Verification over surveillance**
4.  **Adaptive over static**
5.  **Human decision over blind automation**
6.  **Transparency over black-box scoring**
7.  **Candidate value alongside employer value**
8.  **Real-world ability over memorization**
9.  **Confidence-aware AI**
10. **Outcome validation over marketing claims**

------------------------------------------------------------------------

# 58. What NOT to Lose While Building

Whenever a new feature is proposed, ask:

### Question 1

Does this improve actual skill verification?

### Question 2

Does this create better evidence?

### Question 3

Does this improve hiring signal quality?

### Question 4

Could a competitor copy this in 2 weeks?

### Question 5

Does this introduce unnecessary regulatory risk?

### Question 6

Would a recruiter pay for it?

### Question 7

Does the candidate benefit?

If most answers are "no", do not build it.

------------------------------------------------------------------------

# 59. Product Decision Filter

Score every feature 1--10:

  Criterion             Score
  ------------------- -------
  Customer pain           /10
  Hiring impact           /10
  Candidate value         /10
  Differentiation         /10
  Defensibility           /10
  MVP feasibility         /10
  Revenue potential       /10
  Regulatory risk         /10
  Data moat               /10

Build features with:

> High pain + high hiring impact + high differentiation + high
> defensibility.

------------------------------------------------------------------------

# 60. Final Startup Thesis

## A. Market problem

AI reduces interview cost but creates a trust problem.

## B. Biggest gap

Reliable, transparent proof of candidate competence.

## C. Best underserved buyer

Mid-market technical hiring teams, staffing firms and RPOs.

## D. Product

AI Candidate Verification Platform.

## E. Killer feature

Claim-to-Proof Interview.

## F. MVP

Resume + JD → claims → adaptive voice interview → technical verification
→ evidence report.

## G. Differentiator

Evidence-backed verification rather than generic AI scoring.

## H. Business model

Pay-per-interview → SaaS + usage → enterprise.

## I. Architecture

LLM + STT/TTS + adaptive orchestrator + competency graph + evidence
engine + sandbox + PostgreSQL.

## J. Moat

Verification data + competency graph + human calibration + hiring
outcomes.

## K. Biggest risks

Incumbents, LLM reliability, regulation, candidate trust.

## L. 12-month objective

Prove that Claim-to-Proof interviews produce a better hiring signal than
generic AI interviews.

------------------------------------------------------------------------

# 61. The One Thing To Remember

> ## **The AI interviewer is not the product.**
>
> ## **The evidence is the product.**

Build the system that can answer:

> **"What does this candidate actually know, how do we know it, and how
> confident are we?"**

That is the foundation around which the entire startup should be built.
