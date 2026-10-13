import { CONTENT } from './portfolio';

/** Semantic, crawlable markup. Used by the lens and by the always-present hidden copy. */
export default function Section({ id, headingId }) {
  const c = CONTENT[id];
  if (!c) return null;
  return (
    <article>
      <h2 id={headingId}>{c.title}</h2>
      {c.items.map((it) => (
        <section key={it.heading} className="item">
          <h3>{it.heading}</h3>
          <p className="meta">{it.meta}</p>
          <p>{it.body}</p>
        </section>
      ))}
    </article>
  );
}
