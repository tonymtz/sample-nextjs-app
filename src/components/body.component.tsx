import { Center, Description, Img, Logo } from "~/app/page.styles";

export const Body = ({ children }: { children: React.ReactNode }) => (
  <>
    <Description>
      { children }

      <div>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Logo
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </Description>

    <Center>
      <Img
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </Center>
  </>
)
