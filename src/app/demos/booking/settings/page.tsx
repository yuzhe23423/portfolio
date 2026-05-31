"use client";

import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function SettingsPage() {
  const [hours, setHours] = useState<Record<string, { on: boolean; from: string; to: string }>>(
    () => {
      const init: Record<string, { on: boolean; from: string; to: string }> = {};
      days.forEach((d) => {
        init[d] = {
          on: d !== "Sat" && d !== "Sun",
          from: "09:00",
          to: "18:00",
        };
      });
      return init;
    }
  );

  const [notif, setNotif] = useState({ email: true, sms: false, push: true });
  const [bookingWindow, setBookingWindow] = useState("14");

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            Settings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Tweak your availability, notifications, and account preferences.
          </p>
        </div>

        {/* Account */}
        <Section title="Account" sub="The name and email people will see.">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Display name" defaultValue="Yu Zhe Ong" />
            <Field label="Email" type="email" defaultValue="hello@slottr.app" />
            <Field
              label="Booking link"
              defaultValue="slottr.app/u/yuzhe"
              hint="This is the URL clients use to book."
            />
            <Field label="Timezone" defaultValue="Asia/Kuala Lumpur (GMT+8)" />
          </div>
        </Section>

        {/* Availability */}
        <Section
          title="Availability"
          sub="When clients can book a slot. Each day uses one window."
        >
          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {days.map((d) => (
              <li key={d} className="flex flex-wrap items-center gap-4 px-5 py-3">
                <span className="w-12 font-mono text-sm">{d}</span>
                <Toggle
                  on={hours[d].on}
                  onChange={(on) =>
                    setHours((h) => ({ ...h, [d]: { ...h[d], on } }))
                  }
                />
                <div className="ml-auto flex items-center gap-2 text-sm">
                  <input
                    type="time"
                    value={hours[d].from}
                    disabled={!hours[d].on}
                    onChange={(e) =>
                      setHours((h) => ({
                        ...h,
                        [d]: { ...h[d], from: e.target.value },
                      }))
                    }
                    className="rounded-md border border-border bg-background px-2 py-1 outline-none disabled:opacity-40"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="time"
                    value={hours[d].to}
                    disabled={!hours[d].on}
                    onChange={(e) =>
                      setHours((h) => ({
                        ...h,
                        [d]: { ...h[d], to: e.target.value },
                      }))
                    }
                    className="rounded-md border border-border bg-background px-2 py-1 outline-none disabled:opacity-40"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Booking window */}
        <Section title="Booking window" sub="How far ahead clients can book.">
          <div className="rounded-xl border border-border bg-card p-5">
            <label className="block text-sm">
              <span className="mb-2 block font-medium">Up to</span>
              <select
                value={bookingWindow}
                onChange={(e) => setBookingWindow(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:border-accent"
              >
                <option value="7">7 days ahead</option>
                <option value="14">14 days ahead</option>
                <option value="30">30 days ahead</option>
                <option value="60">60 days ahead</option>
              </select>
            </label>
          </div>
        </Section>

        {/* Notifications */}
        <Section title="Notifications" sub="How you want to be alerted about new bookings.">
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            <NotifRow
              label="Email"
              sub="Get an email every time a booking is created or cancelled."
              on={notif.email}
              onChange={(on) => setNotif((n) => ({ ...n, email: on }))}
            />
            <NotifRow
              label="SMS"
              sub="Receive a text message within a minute of new bookings."
              on={notif.sms}
              onChange={(on) => setNotif((n) => ({ ...n, sms: on }))}
            />
            <NotifRow
              label="Push notifications"
              sub="Browser + mobile push notifications."
              on={notif.push}
              onChange={(on) => setNotif((n) => ({ ...n, push: on }))}
            />
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

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
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
  );
}

function NotifRow({
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
      <Toggle on={on} onChange={onChange} />
    </div>
  );
}
