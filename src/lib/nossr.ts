import dynamic from 'next/dynamic'
 
export const DynamicComponentWithNoSSR = dynamic(
  () => import('../app/(app)/company/life-at-prospectiv/page'),
  { ssr: false }
)
 