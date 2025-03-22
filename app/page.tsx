import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  CheckCircle,
  Users,
  Building,
  ChevronRight,
  Lock,
  Code,
  Database,
  Server,
  Globe,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/skill logo.png"
              alt="Skillmerge Logo"
              style={{ width: "200px", height: "200px" }}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#program"
              className="text-sm font-medium hover:text-primary"
            >
              Program
            </Link>
            <Link
              href="#tools"
              className="text-sm font-medium hover:text-primary"
            >
              Tools
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium hover:text-primary"
            >
              Partners
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block">
              <Button variant="outline">Talk with Experts</Button>
            </Link>
            <Link href="#apply">
              <Button>Apply Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-br from-background to-background/80 border-b"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
          <div className="container relative grid gap-8 py-12 md:py-24 lg:grid-cols-2 lg:py-32">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  <span className="font-medium">Become an Ethical Hacker</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Certified Cybersecurity Specialist (CCS) Program
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master the art of ethical hacking and launch your career in
                  the high-demand field of cybersecurity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#demo">
                  <Button size="lg" className="group">
                    Book a Free Demo Session
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#apply">
                  <Button size="lg" variant="outline">
                    Apply Now
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Industry Recognized</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Placement Assistance</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Hands-on Training</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md space-y-4 rounded-xl border bg-background/60 p-6 backdrop-blur">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold">
                    Get a free consultation Today
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below to receive program details and a
                    free consultation.
                  </p>
                </div>
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdbzF-aG4BRgDa09IdzH3cs_lACvSF-JGQE7tocl6CTPcnX-Q/formResponse"
                  method="POST"
                  target="_blank"
                  className="space-y-4"
                >
                  <Input
                    name="entry.123456789" // Replace with actual entry ID
                    placeholder="Full Name"
                    required
                  />
                  <Input
                    name="entry.987654321" // Replace with actual entry ID
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <Input
                    name="entry.456789123" // Replace with actual entry ID
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                  <Input
                    name="entry.789123456" // Replace with actual entry ID
                    placeholder="Your Highest Qualification"
                    required
                  />

                  <div className="space-y-2">
                    <label
                      htmlFor="mode-of-study"
                      className="text-sm font-medium"
                    >
                      Mode of Study
                    </label>
                    <select
                      name="entry.321654987" // Replace with actual entry ID
                      id="mode-of-study"
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none"
                    >
                      <option value="">Select Mode of Study</option>
                      <option value="onsite">Onsite</option>
                      <option value="online">Online</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section id="program" className="bg-background py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Program Highlights
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our comprehensive program is designed to transform beginners
                into industry-ready cybersecurity professionals.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Penetration Testing</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn to identify and exploit vulnerabilities in systems,
                    networks, and applications.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure Coding</h3>
                  <p className="mt-2 text-muted-foreground">
                    Develop applications with security in mind and identify
                    vulnerabilities in existing code.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Digital Forensics</h3>
                  <p className="mt-2 text-muted-foreground">
                    Investigate security incidents and recover digital evidence
                    using industry-standard tools.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Network Security</h3>
                  <p className="mt-2 text-muted-foreground">
                    Configure and maintain secure networks, firewalls, and
                    intrusion detection systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Web Application Security
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Identify and mitigate common web vulnerabilities like XSS,
                    CSRF, and SQL injection.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Security Operations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Monitor, detect, and respond to security incidents in
                    real-time environments.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="#apply">
                <Button size="lg" className="group">
                  Apply for the Program
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="partners" className="border-t bg-muted/50 py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Industry Partnerships
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our program is developed in collaboration with leading
                cybersecurity companies to ensure industry-relevant skills.
              </p>
            </div>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {/* Partner 1 - Hack the Box Kerala */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/Hack_the_box_kerala-removebg-preview(1)(1).png"
                    alt="Hack the Box Kerala Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>

              {/* Partner 2 */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/logo-black(1)(1).png"
                    alt="Partner 1 Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>

              {/* Partner 3 */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/Frame_257-removebg-preview.png"
                    alt="Partner 2 Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>

              {/* Partner 4 */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/WhatsApp Image 2025-01-04 at 12.17.19 PM.jpeg"
                    alt="Partner 3 Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>

              {/* Partner 5 */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/WhatsApp_Image_2025-01-29_at_12.35.50_PM-removebg-preview (1).png"
                    alt="Partner 4 Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>

              {/* Partner 6 */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-background p-2 flex items-center justify-center">
                  <img
                    src="/eme-logo (1).png"
                    alt="Partner 5 Logo"
                    className="object-contain h-12"
                  />
                </div>
              </div>
            </div>

            {/* Become a Partner Button */}
            <div className="flex justify-center">
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-500 rounded-lg text-lg font-semibold hover:bg-gray-100"
              >
                Book a Free Demo Session
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-background py-12 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose Our CCS Program
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Our program stands out with industry-recognized
                    certification, hands-on training, and career support.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">
                        Industry-Recognized Certification
                      </h3>
                      <p className="text-muted-foreground">
                        Our certification is recognized by top employers and
                        meets global standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">
                        Hands-on Learning Environment
                      </h3>
                      <p className="text-muted-foreground">
                        Practice in our state-of-the-art cyber range with
                        real-world scenarios.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Expert Instructors</h3>
                      <p className="text-muted-foreground">
                        Learn from professionals with years of experience in the
                        cybersecurity industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Career Support</h3>
                      <p className="text-muted-foreground">
                        Resume building, interview preparation, and direct
                        connections to hiring partners.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#demo">
                    <Button size="lg" className="group">
                      Book a Free Demo Session
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cybersecurity training"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur">
                      <div className="h-12 w-12 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Covered */}
        <section id="tools" className="border-t bg-muted/50 py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tools & Technologies
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Master the industry-standard tools and technologies used by
                cybersecurity professionals worldwide.
              </p>
            </div>
            <Tabs defaultValue="pentesting" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="pentesting">
                    Penetration Testing
                  </TabsTrigger>
                  <TabsTrigger value="forensics">Digital Forensics</TabsTrigger>
                  <TabsTrigger value="defense">Defensive Security</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="pentesting" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Metasploit",
                    "Burp Suite",
                    "Wireshark",
                    "Nmap",
                    "Kali Linux",
                    "OWASP ZAP",
                    "Aircrack-ng",
                    "Hashcat",
                  ].map((tool, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-4 h-12 w-12 rounded bg-primary/10" />
                        <h3 className="text-lg font-bold">{tool}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Industry-standard tool for cybersecurity
                          professionals.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="forensics" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Autopsy",
                    "FTK",
                    "Volatility",
                    "EnCase",
                    "Sleuth Kit",
                    "SANS SIFT",
                    "Cellebrite",
                    "X-Ways",
                  ].map((tool, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-4 h-12 w-12 rounded bg-primary/10" />
                        <h3 className="text-lg font-bold">{tool}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Digital forensics tool used by investigators
                          worldwide.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="defense" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Splunk",
                    "ELK Stack",
                    "Snort",
                    "Suricata",
                    "Nessus",
                    "OpenVAS",
                    "CrowdStrike",
                    "Carbon Black",
                  ].map((tool, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-4 h-12 w-12 rounded bg-primary/10" />
                        <h3 className="text-lg font-bold">{tool}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Defensive security tool for threat detection and
                          response.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center">
              <Link href="#apply">
                <Button size="lg"> Book a Free Demo Session</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Placement Partners */}
        <section className="bg-background py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Placement Partners
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our graduates are hired by leading companies in the
                cybersecurity industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {/* Add images manually */}
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/channels4_profile-removebg-preview.png" // Replace with your actual image path
                    alt="Company 1 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/images-removebg-preview.png" // Replace with your actual image path
                    alt="Company 2 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/images__1_-removebg-preview.png" // Replace with your actual image path
                    alt="Company 3 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/images__2_-removebg-preview.png" // Replace with your actual image path
                    alt="Company 4 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/images__3_-removebg-preview.png" // Replace with your actual image path
                    alt="Company 5 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-32 rounded-lg bg-muted p-2 flex items-center justify-center">
                  <Image
                    src="/images__4_-removebg-preview.png" // Replace with your actual image path
                    alt="Company 6 Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h3 className="text-2xl font-bold">Placement Success Rate</h3>
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <p className="text-sm text-muted-foreground">
                    Placement Rate
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    12-24LPA
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average Starting Salary
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">14 Days</div>
                  <p className="text-sm text-muted-foreground">
                    Average Time to Hire
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  Book a Free Demo Session
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t bg-muted/50 py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Student Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Hear from our graduates who have successfully launched their
                careers in cybersecurity.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "Security Analyst at TechCorp",
                  quote:
                    "The hands-on training I received in the CCS program prepared me for real-world challenges. I landed a job within two weeks of completing the program.",
                },
                {
                  name: "Sarah Williams",
                  role: "Penetration Tester at SecureNet",
                  quote:
                    "The instructors were industry professionals who shared practical knowledge that you can't find in textbooks. The career support was exceptional.",
                },
                {
                  name: "Michael Chen",
                  role: "SOC Analyst at CyberDefense",
                  quote:
                    "The program's focus on both offensive and defensive security gave me a well-rounded skill set that employers value. Best investment in my career.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="space-y-1">
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="#demo">
                <Button size="lg" className="group">
                  Join Our Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-background py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Find answers to common questions about our Certified
                Cybersecurity Specialist program.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What are the prerequisites for this program?
                  </AccordionTrigger>
                  <AccordionContent>
                    Basic knowledge of computer networks and operating systems
                    is recommended. No prior cybersecurity experience is
                    required. We offer a preparatory course for complete
                    beginners.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long is the program?</AccordionTrigger>
                  <AccordionContent>
                    The full-time program is 12 weeks long. We also offer a
                    part-time option that spans 24 weeks, designed for working
                    professionals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is the program available online?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer both in-person and online options. Our virtual
                    learning environment provides the same hands-on experience
                    with remote access to our cyber range.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What certification will I receive?
                  </AccordionTrigger>
                  <AccordionContent>
                    Upon successful completion, you'll receive our Certified
                    Cybersecurity Specialist (CCS) certification. We also
                    prepare you for industry certifications like CompTIA
                    Security+, CEH, and OSCP.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Do you offer job placement assistance?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, our career services team provides resume reviews,
                    interview preparation, and direct connections to our hiring
                    partners. We have a 92% placement rate within 3 months of
                    graduation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Are there financing options available?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer several financing options, including installment
                    plans, scholarships for underrepresented groups, and income
                    share agreements where you pay only after securing a job.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex justify-center">
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  Have More Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="apply"
          className="border-t bg-primary text-primary-foreground py-12 md:py-24"
        >
          <div className="container space-y-8">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Launch Your Cybersecurity Career?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed opacity-90">
                Applications for our next cohort are now open. Limited seats
                available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Book a Free Demo Session
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Talk with Experts
                </Button>
              </Link>
              <Link href="#apply-form">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="bg-background py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get Started Today
                </h2>
                <p className="text-muted-foreground">
                  Fill out the application form below to start your journey in
                  cybersecurity.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-md space-y-4 rounded-xl border bg-background/60 p-6 backdrop-blur">
                  <div className="space-y-2 text-center">
                    <h2 className="text-2xl font-bold">Get Started Today</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below to receive program details and a
                      free consultation.
                    </p>
                  </div>
                  <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdbzF-aG4BRgDa09IdzH3cs_lACvSF-JGQE7tocl6CTPcnX-Q/formResponse"
                    method="POST"
                    target="_blank"
                    className="space-y-4"
                  >
                    <Input
                      name="entry.123456789" // Replace with actual entry ID
                      placeholder="Full Name"
                      required
                    />
                    <Input
                      name="entry.987654321" // Replace with actual entry ID
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <Input
                      name="entry.456789123" // Replace with actual entry ID
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                    <Input
                      name="entry.789123456" // Replace with actual entry ID
                      placeholder="Your Highest Qualification"
                      required
                    />

                    <div className="space-y-2">
                      <label
                        htmlFor="mode-of-study"
                        className="text-sm font-medium"
                      >
                        Mode of Study
                      </label>
                      <select
                        name="entry.321654987" // Replace with actual entry ID
                        id="mode-of-study"
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none"
                      >
                        <option value="">Select Mode of Study</option>
                        <option value="onsite">Onsite</option>
                        <option value="online">Online</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t bg-muted/50 py-12 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground">
                    Have questions about our program? Our admissions team is
                    here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">
                        XXXIV/572, NH 47, Edappally Toll, Nethaji Nagar, Jn,
                        Ernakulam, Kerala 682024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        9946746422
                      </p>
                      <p className="text-sm text-muted-foreground">
                        9947340180
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        admissions@skillmerge.in
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 hover:bg-muted/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdbzF-aG4BRgDa09IdzH3cs_lACvSF-JGQE7tocl6CTPcnX-Q/formResponse"
                  method="POST"
                  target="_blank"
                  className="space-y-4"
                >
                  <Input
                    name="entry.123456789" // Replace with actual entry ID
                    placeholder="Full Name"
                    required
                  />
                  <Input
                    name="entry.987654321" // Replace with actual entry ID
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <Input
                    name="entry.456789123" // Replace with actual entry ID
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                  <Input
                    name="entry.789123456" // Replace with actual entry ID
                    placeholder="Your Highest Qualification"
                    required
                  />

                  <div className="space-y-2">
                    <label
                      htmlFor="mode-of-study"
                      className="text-sm font-medium"
                    >
                      Mode of Study
                    </label>
                    <select
                      name="entry.321654987" // Replace with actual entry ID
                      id="mode-of-study"
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none"
                    >
                      <option value="">Select Mode of Study</option>
                      <option value="onsite">Onsite</option>
                      <option value="online">Online</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background py-6 md:py-12">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/skill logo.png"
                alt="Skillmerge Logo"
                style={{ width: "200px", height: "200px" }}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of cybersecurity professionals with
              industry-leading education and hands-on training.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#program" className="text-sm hover:underline">
                Program Details
              </Link>
              <Link href="#tools" className="text-sm hover:underline">
                Tools & Technologies
              </Link>
              <Link href="#partners" className="text-sm hover:underline">
                Industry Partners
              </Link>
              <Link href="#faq" className="text-sm hover:underline">
                FAQ
              </Link>
              <Link href="#apply" className="text-sm hover:underline">
                Apply Now
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm hover:underline">
                Blog
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Webinars
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Free Tutorials
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Career Guide
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Scholarship Information
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Accessibility
              </Link>
            </nav>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Skill MergeHub Pvt Ltd. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed and developed by INNOVATE_X LAB
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
