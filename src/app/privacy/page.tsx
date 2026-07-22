import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Memobox',
  description:
    'Privacy Policy for Memobox, including voice memos, AI task planning, shared tasks, subscriptions, notifications, and US privacy rights.',
};

const dataCategories = [
  {
    title: 'Account and profile',
    items: [
      'Name, email address, sign-in provider, account identifiers, profile details, preferences, and account creation date.',
      'Authentication data needed to keep your account secure and signed in.',
    ],
  },
  {
    title: 'Voice, memo, and task content',
    items: [
      'Voice recordings, audio clips, speech-to-text transcripts, typed notes, reminders, tasks, subtasks, lists, ideas, emotional notes, and chat messages with JEETU.',
      'AI-generated summaries, plans, classifications, memory signals, suggestions, follow-up questions, and task metadata such as due dates, start times, priorities, status, and completion history.',
    ],
  },
  {
    title: 'Sharing and collaboration',
    items: [
      'Contacts or invited users you choose to share with, group members, shared task details, group chat messages, assignment status, and completion updates.',
      'Notification and activity data needed to tell you or another user when a task is shared, updated, completed, overdue, or discussed.',
    ],
  },
  {
    title: 'Calendar and integrations',
    items: [
      'Calendar permission status and calendar event details you authorize us to access so JEETU can plan your day and avoid conflicts.',
      'Integration tokens or permission metadata where required to connect third-party services. You can revoke access from the connected service or inside Memobox where available.',
    ],
  },
  {
    title: 'Device, notifications, and usage',
    items: [
      'Device model, operating system, app version, language, timezone, approximate region, push notification tokens, notification delivery status, and app settings.',
      'Usage events, diagnostics, crash logs, performance data, feature interactions, and support logs used to keep the app reliable.',
    ],
  },
  {
    title: 'Purchases and subscriptions',
    items: [
      'Subscription product, purchase status, renewal or cancellation status, transaction identifiers, platform, and entitlement state.',
      'We do not receive or store your full card number or raw payment credentials. Payments are handled by Apple App Store, Google Play, or other payment providers.',
    ],
  },
];

const uses = [
  'Provide voice capture, transcription, task creation, reminders, planning, focus guidance, daily briefs, reviews, and JEETU conversations.',
  'Understand your intent, organize memos into tasks, ideas, lists, emotional notes, or other useful categories, and remember context you ask the app to keep.',
  'Share tasks or updates with people and groups you choose, and notify the right users about changes or completions.',
  'Send push notifications such as shared task alerts, morning briefs, pre-task reminders, overdue updates, and end-of-day reviews.',
  'Process subscriptions, activate Pro features, restore purchases, prevent abuse, and provide support.',
  'Debug crashes, improve performance, prevent duplicate tasks or notifications, protect accounts, and secure the service.',
];

const providers = [
  {
    service: 'Cloud database, authentication, and storage',
    purpose: 'Stores account data, memos, tasks, groups, notification state, and app settings.',
  },
  {
    service: 'AI and transcription providers',
    purpose:
      'Processes audio, transcripts, notes, task context, and chat prompts to provide transcription, classification, planning, memory, and assistant responses.',
  },
  {
    service: 'Push notification providers',
    purpose:
      'Delivers device notifications for reminders, shared tasks, daily planning, and review updates.',
  },
  {
    service: 'App stores and payment processors',
    purpose:
      'Processes purchases and subscriptions, validates receipts, and manages billing status.',
  },
  {
    service: 'Analytics, diagnostics, and infrastructure providers',
    purpose:
      'Helps us measure reliability, investigate bugs, prevent abuse, and operate the app.',
  },
];

const rights = [
  'Access or request a copy of personal information we hold about you.',
  'Correct inaccurate account or profile information.',
  'Delete your account and associated personal information, subject to limited legal, security, backup, or transaction-record retention needs.',
  'Opt out of marketing communications where applicable.',
  'Control app permissions such as microphone, notifications, contacts, and calendar access from your device settings.',
  'Request information about the categories of personal information we collect, use, disclose, and retain.',
];

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Last Updated: July 22, 2026
          </p>
        </div>

        <section className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-300">
            Memobox helps you capture voice memos, notes, tasks, ideas, reminders, and conversations with JEETU. This Privacy Policy explains what we collect, how we use it, how we share it, and the choices you have. It is written for users in the United States and other regions, including rights that may apply under laws such as the California Consumer Privacy Act and California Privacy Rights Act, the GDPR, and the UK GDPR.
          </p>
          <p className="text-gray-300">
            When we say <strong className="text-white">Memobox</strong>, <strong className="text-white">we</strong>, <strong className="text-white">us</strong>, or <strong className="text-white">our</strong>, we mean the team that operates the Memobox app and website. If you have questions, contact us at <a href="mailto:hello@memobox.ai" className="text-primary hover:underline">hello@memobox.ai</a>.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-300">
            We collect information needed to run an AI task companion, help you remember context, and deliver reliable reminders.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {dataCategories.map((category) => (
              <div key={category.title} className="glass p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-medium text-primary">{category.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            2. How We Use Information
          </h2>
          <ul className="space-y-3 pl-4 border-l-2 border-primary/30">
            {uses.map((item) => (
              <li key={item} className="pl-2 text-gray-400">{item}</li>
            ))}
          </ul>
          <p className="text-gray-300">
            We do not sell your personal information. We do not use your private memo content for third-party advertising.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            3. AI Processing and Memory
          </h2>
          <p className="text-gray-300">
            JEETU uses AI to understand intent, summarize memos, create or update tasks, suggest plans, answer questions, and remember useful context. This may require sending audio, transcripts, notes, task details, chat history, and relevant memory context to AI or transcription providers. We use this information to provide the app experience you request, improve reliability, and reduce mistakes such as duplicate tasks or missed reminders.
          </p>
          <p className="text-gray-300">
            You should not use Memobox as a medical, legal, financial, emergency, or mental-health crisis service. JEETU can support planning and reflection, but it is not a licensed professional or emergency responder.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            4. How We Share Information
          </h2>
          <p className="text-gray-300">
            We share information only as needed to provide, secure, support, and improve Memobox, or when you choose to share information with another user.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-gray-200 font-medium">
                <tr>
                  <th className="p-4">Recipient</th>
                  <th className="p-4">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {providers.map((provider) => (
                  <tr key={provider.service} className="bg-black/20">
                    <td className="p-4 font-medium text-white">{provider.service}</td>
                    <td className="p-4 text-gray-400">{provider.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-300">
            If you share a task, reminder, message, or group update with another user, that user may see the content you shared, related task status, and updates such as completion or missed-task alerts.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            5. Security and Retention
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Encryption', desc: 'We use transport encryption such as TLS to protect data in transit.' },
              { title: 'Access controls', desc: 'We limit access to personal information to people and systems that need it to operate Memobox.' },
              { title: 'Retention', desc: 'We keep account and content data while your account is active or as needed to provide the service.' },
              { title: 'Deletion', desc: 'When you delete your account, we delete or de-identify personal information from active systems, subject to limited backup, legal, security, and transaction-record needs.' },
            ].map((item) => (
              <li key={item.title} className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <strong className="text-white">{item.title}:</strong> <span className="text-gray-400">{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            6. Your Choices and Rights
          </h2>
          <div className="grid gap-4">
            {rights.map((right) => (
              <div key={right} className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400">{right}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300">
            To make a privacy request, email <a href="mailto:hello@memobox.ai" className="text-primary hover:underline">hello@memobox.ai</a>. We may need to verify your identity before completing the request. California residents may have additional rights to know, access, correct, delete, and limit certain uses of sensitive personal information where applicable. We do not sell or share personal information for cross-context behavioral advertising.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            7. Children
          </h2>
          <p className="text-gray-300">
            Memobox is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information to us, contact us at <a href="mailto:hello@memobox.ai" className="text-primary hover:underline">hello@memobox.ai</a> and we will take appropriate steps to delete it.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            8. International Transfers
          </h2>
          <p className="text-gray-300">
            Memobox may process and store information in the United States, India, and other countries where we or our service providers operate. These countries may have data protection laws different from your country. We use appropriate safeguards where required.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-300">
            We may update this Privacy Policy as Memobox evolves. If changes are material, we will provide notice through the app, website, email, or another reasonable method.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            10. Contact
          </h2>
          <p className="text-gray-300">
            For privacy questions, account deletion, or data requests, contact us at <a href="mailto:hello@memobox.ai" className="text-primary hover:underline">hello@memobox.ai</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
