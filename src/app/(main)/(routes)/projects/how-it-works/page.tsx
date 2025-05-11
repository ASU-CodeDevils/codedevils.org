import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, InternalLink } from "src/app/components/ui/buttons";
import { Hero, Section } from "src/app/components/ui/ContentWrappers";
import {
  ChevronRight,
  Users,
  GitBranch,
  TerminalSquare,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import CopyCommand from "src/app/components/copycommand";

export const metadata: Metadata = {
  title: "Contributing to CodeDevils",
  description:
    "Learn how to contribute to CodeDevils projects and be part of our open-source community. Find guidelines for git flow, development setup, and resources for contributors.",
  openGraph: {
    title: "Contributing to CodeDevils",
    description:
      "Learn how to contribute to CodeDevils projects and be part of our open-source community. Find guidelines for git flow, development setup, and resources for contributors.",
  },
};

const ContributingPage = () => {
  return (
    <>
      <div className="w-full h-24" />
      <Hero className="bg-gray">
        <article className="space-y-3 text-center">
          <h1 className="mx-auto text-5xl font-bold md:w-2/3 md:text-6xl">
            Contributing Guidelines
          </h1>
          <p className="text-xl text-black/70 md:mx-auto md:w-7/12">
            Join our community and help us build amazing software. This guide
            outlines how to contribute to CodeDevils projects effectively.
          </p>
        </article>
      </Hero>

      {/* Quick Nav Section */}
      <Section className="bg-white py-16 ">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-bold text-maroon mb-8 text-center ">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-100 bg-opacity-40">
            <Link
              href="#leadership"
              className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-maroon/5 transition-all transform hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="rounded-full bg-maroon/10 p-3 mb-4">
                <Users className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg">Leadership</h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Meet the project managers and learn about our team structure.
              </p>
            </Link>
            <Link
              href="#git-flow"
              className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-maroon/5 transition-all transform hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="rounded-full bg-maroon/10 p-3 mb-4">
                <GitBranch className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg">Git Flow</h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Learn our branch strategy, commit conventions, and PR
                guidelines.
              </p>
            </Link>
            <Link
              href="#setup"
              className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-maroon/5 transition-all transform hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="rounded-full bg-maroon/10 p-3 mb-4">
                <TerminalSquare className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg">Setup</h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Get your local development environment up and running.
              </p>
            </Link>
            <Link
              href="#resources"
              className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-maroon/5 transition-all transform hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="rounded-full bg-maroon/10 p-3 mb-4">
                <BookOpen className="h-6 w-6 text-maroon" />
              </div>
              <h3 className="font-semibold text-lg">Resources</h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Explore learning resources and helpful tools for contributors.
              </p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section id="leadership" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl text-maroon mb-2">Team Structure</h2>
              <h3 className="text-3xl font-bold mb-4">Project Leadership</h3>
              <p className="text-gray-700">
                The CodeDevils Website project managers are Pita Sherwood (
                <Link
                  href="https://github.com/PitaFLAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon hover:underline"
                >
                  @PitaFLAME
                </Link>
                ) and Frankie Lin (
                <Link
                  href="https://github.com/frankjlin16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon hover:underline"
                >
                  @frankjlin16
                </Link>
                ). They control the day-to-day operation of this project, with
                oversight and policy dictated by the CodeDevil Officers.
              </p>
              <blockquote className="border-l-4 border-maroon pl-4 italic mt-4">
                To check out all projects and project leads, check out our{" "}
                <Link href="/projects" className="text-maroon hover:underline">
                  projects page
                </Link>
                .
              </blockquote>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
                <p className="mb-4">
                  If you have any questions or need assistance with the
                  contributing process, feel free to reach out to our project
                  managers or ask in our Discord channel.
                </p>
                <ExternalLink
                  href="https://discord.gg/codedevils"
                  className="w-full flex items-center justify-center"
                >
                  Join our Discord
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Git Flow Section */}
      <Section id="git-flow" className="bg-white py-16">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-xl text-maroon mb-2">Development Process</h2>
          <h3 className="text-3xl font-bold mb-6">Git Flow</h3>
          <p className="mb-8">
            Forking is not necessary - use the origin repo's branches for your
            own code bases. You have full control over your own development
            branches and Git flow. That said, there are some general guidelines
            you need to follow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4
                id="available-issues"
                className="text-xl font-semibold mb-4 text-maroon"
              >
                Finding Issues to Work On
              </h4>
              <p className="mb-4">
                When you want to work on the project, start with the GitHub
                Issues page. This is where we'll post available work for
                contributors. Each issue will have difficulty and field tags, as
                well as what the actual changes will entail.
              </p>
              <p>
                If you see an issue that you'd like to work on, go to the issue
                and comment on it saying that you'd like to work it. If you've
                done that, you've essentially 'claimed' the issue. The project
                lead will assign the issue to you, and you can begin working on
                the issue!
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4
                id="issue-branch"
                className="text-xl font-semibold mb-4 text-maroon"
              >
                Branch Naming Convention
              </h4>
              <p className="mb-4">
                When you have an issue that you are working, you must start by
                creating an Issue Branch. When naming the branch, follow this
                naming convention:
              </p>
              <div className="bg-gray-100 p-4 rounded-md overflow-auto mb-4">
                <code>{"<TYPE>/<ISSUE-ID>/<SHORT-DESCRIPTION>"}</code>
              </div>
              <p>Your branch's TYPE must be one of the following:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Fix</strong> - for issues that address errors, bugs,
                  or broken things
                </li>
                <li>
                  <strong>Update</strong> - for changes and maintenance
                </li>
                <li>
                  <strong>Feature</strong> - for issues that request new content
                </li>
                <li>
                  <strong>Refactor</strong> - for issues that optimize the code
                </li>
                <li>
                  <strong>Style</strong> - for issues that make the code more
                  readable, clean, or otherwise pretty
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-xl font-semibold mb-4 text-maroon">
              Example Branch Names
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <code>refactor/102/optimize-api-code</code>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <code>feature/89/add-welcome-section</code>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <code>fix/110/fix-org-link</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <h4 id="commits" className="text-xl font-semibold mb-4 text-maroon">
              Commits
            </h4>
            <p className="mb-4">
              To the best of your ability, please try to keep the commits to
              your Issue Branch as few as possible. If there end up being a lot
              of commits on your branch, please squash them before you create
              your Pull Request.
            </p>
            <p>
              Your Commits do not have any requirements for their naming
              convention, other than being vaguely relevant to the actions
              taken. They need not be anything more than a short description of
              your changes.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <h4
              id="pull-requests"
              className="text-xl font-semibold mb-4 text-maroon"
            >
              Pull Requests
            </h4>
            <p className="mb-4">
              After you have finished working on an Issue and you have a
              finished version of your code, commit it to your branch, and
              create a Pull Request to merge your Issue Branch to{" "}
              <code>dev</code>.
            </p>
            <div className="mb-4">
              <p className="font-semibold">
                Your Pull Requests have some requirements for documentation.
                They must include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <p>
                    <strong>An explanation of the changes you made.</strong>
                  </p>
                  <ul className="list-circle pl-5 space-y-1 mt-1">
                    <li>
                      For issues tagged "simple", this need not be very
                      detailed, but just a note of what you did.
                    </li>
                    <li>
                      For issues with no complexity tag, give a reasonable
                      explanation for the changes you made. It should be
                      comprehensive.
                    </li>
                    <li>
                      For issues tagged "complex", explain why you made any
                      choices that you did for how you approached the issue.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <p>
                    You must link the issue that you are working on at the end
                    of the Pull Request using the issue number (e.g., #99).
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4
              id="main-vs-dev"
              className="text-xl font-semibold mb-4 text-maroon"
            >
              Main vs Dev Branch
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Main Branch:</h5>
                <p>
                  The <code>main</code> branch is the <em>production code</em>{" "}
                  that CodeDevils Website is currently operating on. Whatever is
                  in <code>main</code> is what will be on the internet.
                  Contributors should never make a Pull Request to merge
                  directly to <code>main</code>.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Dev Branch:</h5>
                <p>
                  The <code>dev</code> branch is where all Pull Requests should
                  point to. When creating a new branch, stem from{" "}
                  <code>dev</code>. When creating a Pull Request, merge to{" "}
                  <code>dev</code>. After enough time, or after a sprint, the
                  changes in <code>dev</code> will be merged to{" "}
                  <code>main</code> by the Project Lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Setup Development Environment */}
      <Section id="setup" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-xl text-maroon mb-2">Get Started</h2>
          <h3 className="text-3xl font-bold mb-6">
            Setup Development Environment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Requirements</h4>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-maroon text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Install pnpm</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Our preferred package manager
                      </p>
                      <Link
                        href="https://pnpm.io/installation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-maroon hover:underline text-sm inline-flex items-center mt-1"
                      >
                        Installation guide{" "}
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-maroon text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Install Node.js</p>
                      <p className="text-sm text-gray-600 mt-1">
                        We recommend LTS version
                      </p>
                      <Link
                        href="https://nodejs.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-maroon hover:underline text-sm inline-flex items-center mt-1"
                      >
                        Download Node.js{" "}
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Alternatively, you can install both requirements with a
                  package manager -{" "}
                  <Link
                    href="https://brew.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline"
                  >
                    homebrew
                  </Link>{" "}
                  (macOS) or{" "}
                  <Link
                    href="https://chocolatey.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline"
                  >
                    chocolatey
                  </Link>{" "}
                  (Windows).
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Getting Started</h4>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">1. Clone the repository</p>

                    <div>
                      <CopyCommand command="git clone https://github.com/ASU-CodeDevils/codedevils.org.git" />
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">2. Install dependencies</p>
                    <div className="bg-gray-100 p-3 rounded-md overflow-auto">
                      <CopyCommand command="pnpm install" />
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">
                      3. Start the development server
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md overflow-auto">
                      <CopyCommand command="pnpm dev" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Any changes you make to the code will be reflected in your
                  local deployment. The site will be available at{" "}
                  <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">
                    <Link href="http://localhost:3000" target="_blank">
                      http://localhost:3000
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section id="resources" className="bg-white py-16">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-xl text-maroon mb-2">Learning Materials</h2>
          <h3 className="text-3xl font-bold mb-6">
            Resources for Contributors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Git & GitHub</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Installing Git</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Git Basics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Creating a Pull Request</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Learning our Stack</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=Rh3tobg7hEo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Learn React</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=24hFVa3hgVw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Learn TailwindCSS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=ZjAqacIC_3c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Learn Next.js</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=eZJJ189JTks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Learn Next.js (Alternative)</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">
                Additional Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=SG82Aqcaaa0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Full Stack Project Guide</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=_8SN9jw9MJo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Learn MongoDB</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/codedevils"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-maroon hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>CodeDevils Discord</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-maroon text-white py-16">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start by exploring our open issues on GitHub, join our Discord
            community, and become part of the CodeDevils team today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ExternalLink
              href="https://github.com/ASU-CodeDevils/codedevils.org/issues"
              className="bg-white text-maroon hover:bg-gray-100 transition-colors"
            >
              Browse Open Issues
            </ExternalLink>
            <ExternalLink
              href="https://discord.gg/codedevils"
              className="bg-maroon-dark hover:bg-maroon-darker border border-white transition-colors"
            >
              Join Our Discord
            </ExternalLink>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContributingPage;
