import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900 dark:-mt-19 dark:-mb-32 dark:pt-19 dark:pb-32">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-white/10 ring-inset opacity-20 dark:opacity-40" />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48 text-center">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl">
            Accelerate your academic research.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-slate-400 sm:text-2xl">
            The complete, open-source toolkit and curriculum for modern PhDs. Master literature reviews, citation analysis, and PDF workflows.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/docs/00-1-anatomy-of-paper">Start the Course</Button>
            <Button variant="secondary" href="/docs/scholar-search-kit">
              View Toolkits
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
