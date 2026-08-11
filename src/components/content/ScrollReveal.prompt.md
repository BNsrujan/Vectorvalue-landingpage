Wraps any block in the house fade-up reveal (560ms, ease-out-expo, 24px travel). Honours prefers-reduced-motion.

<ScrollReveal delay={140}><SectionHeading … /></ScrollReveal>
{cards.map((c,i)=><ScrollReveal key={c.id} delay={i*70}><ServiceCard {...c} /></ScrollReveal>)}
