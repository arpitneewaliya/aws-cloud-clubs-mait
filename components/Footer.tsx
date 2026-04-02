import { type CSSProperties, type ComponentType, type SVGProps } from "react";

type SocialLink = {
  name: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  rotateHoverClass: string;
  animationDelay: string;
  animationDuration: string;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "WhatsApp",
      href: "#",
      Icon: IconWhatsApp,
      rotateHoverClass: "hover:rotate-6",
      animationDelay: "0s",
      animationDuration: "4s",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/aws-cloud-club-maitt/",
      Icon: IconLinkedIn,
      rotateHoverClass: "hover:-rotate-6",
      animationDelay: "0.5s",
      animationDuration: "4.5s",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awscloudclub_mait",
      Icon: IconInstagram,
      rotateHoverClass: "hover:rotate-12",
      animationDelay: "1s",
      animationDuration: "4.2s",
    },
    {
      name: "Meetup",
      href: "https://meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology",
      Icon: IconMeetup,
      rotateHoverClass: "hover:-rotate-12",
      animationDelay: "1.5s",
      animationDuration: "4.8s",
    },
  ];

  return (
    <footer
      className="footer-cloud-gradient relative mt-24 w-full overflow-hidden"
      style={{
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        boxShadow: "0 -20px 50px rgba(0,68,146,0.1)",
      }}
    >
      <div
        className="absolute left-0 top-0 flex h-8 w-full -translate-y-px overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-12 w-full scale-x-110 bg-background"
          style={{
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row md:px-10">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="flex cursor-pointer items-center gap-4 transition-transform duration-300 hover:scale-105">
            <img
              className="h-12 w-auto animate-float-mini mix-blend-multiply"
              alt="AWS Cloud Clubs MAIT Logo Small"
              src="/logo/aws-cloud-clubs-logo.jpeg"
            />
            <span className="font-headline text-2xl font-black tracking-tight text-primary-dim sm:text-3xl">
              AWS Cloud Clubs MAIT
            </span>
          </div>

          <p className="font-body text-sm font-medium text-on-surface/70">
            © {currentYear} AWS Cloud Clubs MAIT. Built in the pixelated
            stratosphere.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {socialLinks.map((link) => {
              const isExternal = /^https?:\/\//.test(link.href);
              const floatingStyle: CSSProperties = {
                animationDelay: link.animationDelay,
                animationDuration: link.animationDuration,
              };
              const { Icon } = link;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`animate-float text-on-surface-variant transition-all duration-300 hover:scale-125 hover:text-primary ${link.rotateHoverClass}`}
                  style={floatingStyle}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-surface-container-lowest text-primary shadow-sm transition-colors duration-300 hover:bg-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="pixel-hard-shadow rounded-full bg-primary px-8 py-3 font-headline text-lg font-black text-on-primary transition-all hover:scale-110 active:scale-90 sm:px-10 sm:py-4 sm:text-xl"
          >
            JOIN THE CLUB
          </button>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-container/20 blur-3xl"
        aria-hidden="true"
      />
    </footer>
  );
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.05 2.04A9.93 9.93 0 0 0 2.14 11.95c0 1.73.45 3.42 1.31 4.9L2 22l5.29-1.39a9.9 9.9 0 0 0 4.76 1.22h.01A9.94 9.94 0 0 0 22 11.91a9.92 9.92 0 0 0-2.83-7.03 9.9 9.9 0 0 0-7.12-2.84Zm0 17.97h-.01a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-3.14.82.84-3.05-.19-.31a8.02 8.02 0 0 1 1.24-10.15 7.95 7.95 0 0 1 5.64-2.34c4.41 0 8 3.59 8 8a8 8 0 0 1-8 8Zm4.39-6.02c-.24-.12-1.41-.69-1.63-.77-.22-.08-.39-.12-.56.12-.16.24-.62.77-.76.93-.14.16-.29.18-.53.06-.24-.12-1-.36-1.89-1.15-.71-.63-1.18-1.4-1.31-1.64-.14-.24-.01-.36.11-.48.11-.11.24-.28.35-.42.11-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.19-.45-.39-.39-.53-.39h-.45c-.16 0-.41.06-.62.3-.21.24-.82.8-.82 1.94 0 1.14.84 2.25.96 2.4.12.16 1.65 2.52 4 3.53.56.24 1 .38 1.35.48.57.18 1.09.15 1.5.09.46-.07 1.41-.57 1.61-1.12.2-.55.2-1.02.14-1.12-.06-.1-.23-.16-.47-.28Z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
      <path d="M7 11v6" />
      <path d="M11 11v6" />
      <path d="M11 13.5c0-1.4 1-2.5 2.4-2.5S16 12.1 16 13.5V17" />
    </svg>
  );
}

function IconMeetup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M6 16.8 9.4 8a1 1 0 0 1 1.9.2v4.5l1.6-3.7a1 1 0 0 1 1.9.2V15l1.2-2.2a1 1 0 0 1 1.8 1l-2.1 4a1.8 1.8 0 0 1-3.4-.8V13l-1.4 3.2a1.8 1.8 0 0 1-3.4-.8V12l-1.2 3.4A1 1 0 1 1 4.4 15L6 16.8Z" />
    </svg>
  );
}
