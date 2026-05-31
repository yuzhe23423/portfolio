"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Star,
  RotateCcw,
  Sparkles,
  Radio,
  Shield,
} from "lucide-react";

type Question =
  | { id: string; type: "radio"; label: string; options: string[] }
  | { id: string; type: "checkbox"; label: string; options: string[] }
  | { id: string; type: "rating"; label: string }
  | { id: string; type: "text"; label: string; placeholder?: string };

const questions: Question[] = [
  {
    id: "role",
    type: "radio",
    label: "Which best describes your current role?",
    options: ["Engineer", "Designer", "Product manager", "Founder / Solo", "Student"],
  },
  {
    id: "stack",
    type: "checkbox",
    label: "Which of these do you work with regularly?",
    options: ["React", "Vue", "Svelte", "Next.js", "Node.js", "TypeScript", "Python", "Go"],
  },
  {
    id: "rating",
    type: "rating",
    label: "How happy are you with your current tooling?",
  },
  {
    id: "feedback",
    type: "text",
    label: "Anything you'd change about your dev workflow?",
    placeholder: "Tell us what's not working...",
  },
];

const stepLabels = ["Welcome", ...questions.map((_, i) => `Q${i + 1}`), "Done"];

type Answers = Record<string, string | string[] | number>;

export default function SurveyDemo() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const totalSteps = questions.length + 2;
  const progress = (step / (totalSteps - 1)) * 100;

  const update = (id: string, value: string | string[] | number) => {
    setAnswers((a) => ({ ...a, [id]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  const isAnswered = (q: Question) => {
    const v = answers[q.id];
    if (q.type === "checkbox") return Array.isArray(v) && v.length > 0;
    if (q.type === "rating") return typeof v === "number" && v > 0;
    if (q.type === "text") return typeof v === "string" && v.trim().length > 0;
    return Boolean(v);
  };

  const currentQuestion = step >= 1 && step <= questions.length ? questions[step - 1] : null;
  const canProceed = !currentQuestion || isAnswered(currentQuestion);

  return (
    <div className="min-h-screen">
      {/* Pulse minimal header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
              <Radio className="h-3.5 w-3.5" />
            </span>
            <span className="font-display text-lg font-700 tracking-tight">
              Pulse
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="h-3.5 w-3.5" />
            <span>Anonymous · 30 sec</span>
          </div>
        </div>
      </header>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <p className="mb-1 text-xs font-mono tracking-[0.15em] uppercase text-accent">
              Developer Pulse · 2026
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              How is your dev workflow?
            </h1>
            <p className="mt-2 text-muted-foreground">
              A quick {questions.length}-question survey. Your answers stay anonymous.
            </p>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>{stepLabels[step]}</span>
              <span>
                Step {step + 1} / {totalSteps}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        <div className="min-h-[380px] rounded-2xl border border-border bg-card p-8">
          {step === 0 && <Intro onStart={next} />}

          {currentQuestion && (
            <QuestionView
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              onChange={(v) => update(currentQuestion.id, v)}
            />
          )}

          {step === totalSteps - 1 && <Done answers={answers} onReset={reset} />}
        </div>

        {step > 0 && step < totalSteps - 1 && (
          <div className="mt-6 flex justify-between">
            <button
              onClick={prev}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <button
              onClick={next}
              disabled={!canProceed}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === totalSteps - 2 ? "Submit" : "Next"} <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
        </div>
      </section>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-8 text-center">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Sparkles className="h-7 w-7" />
      </div>
      <h2 className="mb-3 font-display text-2xl font-700">Hey there 👋</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        We&apos;re collecting feedback from the dev community to make our tools better.
        Your answers stay anonymous.
      </p>
      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
      >
        Start survey <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function QuestionView({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string | string[] | number | undefined;
  onChange: (v: string | string[] | number) => void;
}) {
  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-700 leading-snug">{question.label}</h2>

      {question.type === "radio" && (
        <div className="space-y-2">
          {question.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
                value === opt
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border hover:border-accent/40 hover:bg-muted"
              }`}
            >
              {opt}
              {value === opt && <Check className="h-4 w-4 text-accent" />}
            </button>
          ))}
        </div>
      )}

      {question.type === "checkbox" && (
        <div className="grid grid-cols-2 gap-2">
          {question.options.map((opt) => {
            const arr = Array.isArray(value) ? value : [];
            const active = arr.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() =>
                  onChange(active ? arr.filter((o) => o !== opt) : [...arr, opt])
                }
                className={`flex items-center justify-between rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition ${
                  active
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/40 hover:bg-muted"
                }`}
              >
                {opt}
                {active && <Check className="h-4 w-4 text-accent" />}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "rating" && (
        <div className="flex items-center justify-center gap-3 py-6">
          {[1, 2, 3, 4, 5].map((n) => {
            const active = typeof value === "number" && n <= value;
            return (
              <button
                key={n}
                type="button"
                onClick={() => onChange(n)}
                className={`group rounded-full p-2 transition ${
                  active ? "text-amber-400" : "text-muted-foreground hover:text-amber-400"
                }`}
                aria-label={`${n} stars`}
              >
                <Star
                  className={`h-9 w-9 transition-transform group-hover:scale-110 ${
                    active ? "fill-current" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {question.type === "text" && (
        <textarea
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          placeholder={question.placeholder}
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
        />
      )}
    </div>
  );
}

function Done({ answers, onReset }: { answers: Answers; onReset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-4 text-center">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <Check className="h-7 w-7" />
      </div>
      <h2 className="mb-3 font-display text-2xl font-700">Thanks for your feedback!</h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        Here&apos;s a summary of what you shared:
      </p>

      <dl className="mb-8 w-full max-w-md space-y-3 text-left">
        {questions.map((q) => {
          const v = answers[q.id];
          let display = "—";
          if (q.type === "checkbox" && Array.isArray(v)) display = v.join(", ");
          else if (q.type === "rating" && typeof v === "number") display = `${v} / 5`;
          else if (typeof v === "string") display = v;
          return (
            <div key={q.id} className="rounded-lg border border-border bg-background p-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {q.label}
              </dt>
              <dd className="mt-1 text-sm">{display || "—"}</dd>
            </div>
          );
        })}
      </dl>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition"
      >
        <RotateCcw className="h-4 w-4" /> Take it again
      </button>
    </div>
  );
}
