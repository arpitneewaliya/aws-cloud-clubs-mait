"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

type Platform = {
  key: string;
  name: string;
  description: string;
  cta: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconPanel: string;
  buttonTone: string;
};

const platforms: Platform[] = [
  {
    key: "whatsapp",
    name: "WhatsApp",
    description:
      "Daily updates, quick coordination, and instant community chats.",
    cta: "Join WhatsApp",
    href: "#",
    Icon: IconWhatsApp,
    iconPanel: "bg-[#128c7e] text-[#e7fff9]",
    buttonTone: "bg-[#25d366] text-[#083c30]",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    description:
      "Professional networking, career opportunities, and club achievements.",
    cta: "Follow Page",
    href: "https://www.linkedin.com/company/aws-cloud-club-maitt/",
    Icon: IconLinkedIn,
    iconPanel: "bg-[#214b63] text-[#a4dcff]",
    buttonTone: "bg-[#0b6d8c] text-white",
  },
  {
    key: "instagram",
    name: "Instagram",
    description:
      "Vlogs, event highlights, and a look into the MAIT campus life.",
    cta: "Follow Us",
    href: "https://www.instagram.com/awscloudclub_mait",
    Icon: IconInstagram,
    iconPanel: "bg-linear-to-br from-[#e93e92] to-[#d93472] text-[#ffe7f3]",
    buttonTone: "bg-[#f8c803] text-[#2a2f32]",
  },
  {
    key: "meetup",
    name: "Meetup",
    description: "Workshops, bootcamps, and cloud summits happening in person.",
    cta: "Join Group",
    href: "https://meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology",
    Icon: IconMeetup,
    iconPanel: "bg-[#1f4e60] text-[#bde6ff]",
    buttonTone: "bg-[#6f9be8] text-[#10346f]",
  },
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-20 sm:px-6"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <h2
            id="community-heading"
            className="font-headline text-4xl font-black tracking-tight text-on-surface sm:text-5xl"
          >
            Connect with Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => {
            const { Icon } = platform;
            const isExternal = /^https?:\/\//.test(platform.href);

            return (
              <article
                key={platform.key}
                className={`rounded-3xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-6 text-center shadow-[0_10px_30px_rgba(39,90,168,0.09)] transition-all duration-300 hover:-translate-y-1 ${
                  isVisible
                    ? "animate-fade-in-up motion-reduce:animate-none"
                    : "translate-y-5 opacity-0"
                }`}
                style={
                  isVisible
                    ? ({ animationDelay: `${index * 140}ms` } as const)
                    : undefined
                }
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-container">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${platform.iconPanel}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mt-5 font-headline text-2xl font-black text-primary">
                  {platform.name}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-relaxed text-on-surface-variant font-body">
                  {platform.description}
                </p>

                <a
                  href={platform.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`pixel-hard-shadow mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-3 font-headline text-sm font-black tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${platform.buttonTone}`}
                >
                  {platform.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
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
