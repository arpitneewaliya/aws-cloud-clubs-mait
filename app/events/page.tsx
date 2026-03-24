import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard, { EventCardProps } from "@/components/EventCard";

const upcomingEvents: EventCardProps[] = [
  {
    title: "AWS Serverless Workshop",
    date: "April 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium, MAIT",
    description: "Dive deep into AWS Serverless architecture. Learn how to build scalable applications using AWS Lambda, API Gateway, and DynamoDB without managing any servers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtelsMGh-o7CYU6HEhr7ox9Bmb2LHzki8F_BI1cCQbuL7BXZC6Qd7dC1JET92YWwz1Y0vN6hYHZHurxxD4WZ4iUHLl0geUaoJ-JJo1a_G7zEzRgkGBnELz72V4mdusuFl-Jma3AAfbkYAKV3hZccIO_9pRAHDohvrNEQZVHO0bz5fav10A8vOicHwya9hPYCw31F9EN9yX1ZeQAKAMlk7AT6W-2zLO7qzdDNZ1q5-CaICSNF-RQEV1DWQGw6Prp8R1zgoZBeD6um", // using a placeholder from Hero
    type: "upcoming",
    link: "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/",
  },
  {
    title: "Cloud Computing 101",
    date: "April 22, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Virtual (Zoom)",
    description: "An introductory session for beginners to understand the basics of cloud computing, deployment models, and why AWS is an industry leader. Perfect for first-year students.",
    type: "upcoming",
  },
  {
    title: "HackTheCloud 2026",
    date: "May 10-12, 2026",
    time: "48 Hours",
    location: "Block 4 Labs, MAIT",
    description: "Our flagship 48-hour cloud hackathon! Form teams, brainstorm innovative solutions, and deploy your projects exclusively on AWS. Huge prizes and swags to be won.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtelsMGh-o7CYU6HEhr7ox9Bmb2LHzki8F_BI1cCQbuL7BXZC6Qd7dC1JET92YWwz1Y0vN6hYHZHurxxD4WZ4iUHLl0geUaoJ-JJo1a_G7zEzRgkGBnELz72V4mdusuFl-Jma3AAfbkYAKV3hZccIO_9pRAHDohvrNEQZVHO0bz5fav10A8vOicHwya9hPYCw31F9EN9yX1ZeQAKAMlk7AT6W-2zLO7qzdDNZ1q5-CaICSNF-RQEV1DWQGw6Prp8R1zgoZBeD6um",
    type: "upcoming",
    link: "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/",
  }
];

const pastEvents: EventCardProps[] = [
  {
    title: "Deploying Your First Web App on EC2",
    date: "March 5, 2026",
    time: "3:00 PM",
    location: "Lab 42, MAIT",
    description: "A hands-on session where students learned how to spin up EC2 instances, configure security groups, and host a simple React application on AWS.",
    type: "past",
  },
  {
    title: "AWS Certification Study Group",
    date: "February 20, 2026",
    time: "5:00 PM",
    location: "Mini Auditorium",
    description: "A collaborative study session focused on the AWS Certified Cloud Practitioner exam. We covered core services, pricing models, and security.",
    type: "past",
  }
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 opacity-10 bg-primary-container rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-96 h-96 opacity-10 bg-secondary rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(#275aa8 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <section className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs font-bold tracking-widest uppercase">
              OUR MISSIONS
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter">
              CLUB <span className="text-primary italic">EVENTS</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Join our latest events, workshops, and cloud sessions. Level up your cloud skills with hands-on experience and community building.
            </p>
          </div>

          {/* Upcoming Events Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">
                upcoming
              </span>
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-4xl">
                history
              </span>
              Past Archives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
