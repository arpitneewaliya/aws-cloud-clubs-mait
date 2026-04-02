import { type ComponentType, type SVGProps } from "react";

type SocialLink = {
  name: string;
  href: string;
  tone: string;
  iconTone: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "WhatsApp",
      href: "#",
      tone: "text-secondary border-secondary/25 bg-secondary/10",
      iconTone: "bg-secondary text-on-secondary",
      Icon: IconWhatsApp,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awscloudclub_mait",
      tone: "text-error border-error/25 bg-error/10",
      iconTone: "bg-error text-on-error",
      Icon: IconInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/aws-cloud-club-maitt/",
      tone: "text-primary border-primary/25 bg-primary/10",
      iconTone: "bg-primary text-on-primary",
      Icon: IconLinkedIn,
    },
    {
      name: "Meetup",
      href: "https://meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology",
      tone: "text-secondary-dim border-secondary-dim/25 bg-secondary-dim/10",
      iconTone: "bg-secondary-dim text-on-secondary",
      Icon: IconMeetup,
    },
  ];

  return (
    <footer className="relative mt-20 w-full border-t border-outline-variant/40 bg-surface-container-low">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-primary/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-outline-variant/50 bg-surface-container-lowest/90 shadow-[0_20px_44px_rgba(39,90,168,0.12)] backdrop-blur-sm">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-black tracking-[0.12rem] text-primary">
                CLOUD COMMUNITY
              </span>

              <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                <img
                  className="h-10 w-auto opacity-90 mix-blend-multiply"
                  alt="AWS Cloud Clubs MAIT Logo Small"
                  src="/logo/aws-cloud-clubs-logo.jpeg"
                />
                <span className="text-xl font-headline font-black text-on-surface">
                  AWS Cloud Clubs MAIT
                </span>
              </div>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-on-surface-variant font-body lg:mx-0">
                Student builders, cloud explorers, and tech storytellers. Stay
                connected with us across every channel.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1 text-xs font-headline font-bold text-on-surface-variant">
                  Student-led
                </span>
                <span className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1 text-xs font-headline font-bold text-on-surface-variant">
                  Hands-on
                </span>
                <span className="rounded-full border border-outline-variant/50 bg-surface-container px-3 py-1 text-xs font-headline font-bold text-on-surface-variant">
                  Open community
                </span>
              </div>
            </div>

            <div>
              <p className="text-center text-xs font-headline font-black tracking-[0.12rem] text-on-surface-variant lg:text-left">
                FIND US ONLINE
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socialLinks.map((link, index) => {
                  const openInNewTab = link.href.trim().length > 0;
                  const { Icon } = link;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={openInNewTab ? "_blank" : undefined}
                      rel={openInNewTab ? "noopener noreferrer" : undefined}
                      className={`group inline-flex min-w-40 items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm font-headline font-black tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${link.tone}`}
                    >
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl shadow-inner ${link.iconTone}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>

                      <span className="text-on-surface">{link.name}</span>

                      <span className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-current/25 bg-surface-container-lowest/70 text-xs font-black transition-transform duration-200 group-hover:translate-x-0.5">
                        {index + 1}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-outline-variant/40 bg-surface-container-low px-6 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
            <p className="text-xs text-on-surface-variant font-body sm:text-sm">
              Build. Learn. Share.
            </p>
            <p className="text-xs text-on-surface-variant font-body sm:text-sm">
              © {currentYear} AWS Cloud Clubs MAIT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
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
