"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [features, setFeatures] = useState({
    twoFactor: true,
    sso: false,
    auditLog: true,
    apiAccess: true,
  });

  const [notif, setNotif] = useState({
    activity: true,
    weeklyDigest: true,
    securityAlerts: true,
    productUpdates: false,
  });

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            Settings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Workspace configuration, security, and notifications.
          </p>
        </div>

        <Section title="Workspace" sub="The basics — name, slug, region.">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Workspace name" defaultValue="Atlas Co." />
            <Field label="Slug" defaultValue="atlas-co" hint="Used in URLs and invites." />
            <Field label="Region" defaultValue="Asia-Pacific (Singapore)" />
            <Field label="Owner email" type="email" defaultValue="owner@atlas.app" />
          </div>
        </Section>

        <Section title="Security" sub="Lock things down to suit your team.">
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            <Row
              label="Require two-factor auth"
              sub="All members must verify a second factor on sign-in."
              on={features.twoFactor}
              onChange={(on) => setFeatures((f) => ({ ...f, twoFactor: on }))}
            />
            <Row
              label="SAML SSO"
              sub="Authenticate via your identity provider. Scale plan required."
              on={features.sso}
              onChange={(on) => setFeatures((f) => ({ ...f, sso: on }))}
            />
            <Row
              label="Audit log"
              sub="Record every admin action with actor, time, and target."
              on={features.auditLog}
              onChange={(on) => setFeatures((f) => ({ ...f, auditLog: on }))}
            />
            <Row
              label="API access"
              sub="Allow programmatic access via personal tokens."
              on={features.apiAccess}
              onChange={(on) => setFeatures((f) => ({ ...f, apiAccess: on }))}
            />
          </div>
        </Section>

        <Section title="Notifications" sub="What lands in your inbox.">
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            <Row
              label="Activity digest"
              sub="An hourly summary of every team event."
              on={notif.activity}
              onChange={(on) => setNotif((n) => ({ ...n, activity: on }))}
            />
            <Row
              label="Weekly summary"
              sub="Monday morning recap with key metrics."
              on={notif.weeklyDigest}
              onChange={(on) => setNotif((n) => ({ ...n, weeklyDigest: on }))}
            />
            <Row
              label="Security alerts"
              sub="Important sign-in attempts and role changes."
              on={notif.securityAlerts}
              onChange={(on) => setNotif((n) => ({ ...n, securityAlerts: on }))}
            />
            <Row
              label="Product updates"
              sub="What's shipping. Roughly twice a month."
              on={notif.productUpdates}
              onChange={(on) => setNotif((n) => ({ ...n, productUpdates: on }))}
            />
          </div>
        </Section>

        <Section title="Danger zone" sub="Be careful with these.">
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-medium">Delete workspace</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete this workspace and all of its data.
                </p>
              </div>
              <button className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition">
                Delete workspace
              </button>
            </div>
          </div>
        </Section>

        <div className="mt-10 flex items-center justify-end gap-2 border-t border-border pt-5">
          <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition">
            Discard
          </button>
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            Save changes
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="mb-3">
        <h2 className="font-display text-xl font-700">{title}</h2>
        {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  type = "text",
  defaultValue,
  hint,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent"
      />
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

function Row({
  label,
  sub,
  on,
  onChange,
}: {
  label: string;
  sub: string;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3">
      <div className="min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
      <button
        onClick={() => onChange(!on)}
        className={`relative h-5 w-9 rounded-full transition ${
          on ? "bg-accent" : "bg-muted"
        }`}
        aria-pressed={on}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all ${
            on ? "left-4" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
