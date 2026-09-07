import type { RequiredTool } from "@/lib/types";

export function RequiredTools({ tools }: { tools: RequiredTool[] }) {
  if (!tools?.length) return null;
  return (
    <section className="py-[40px]">
      <h2 className="dp-section-title">수업 도구·준비물</h2>
      <dl className="dp-tools-grid">
        {tools.map((tool) => <div key={tool.name}>
          <dt>{tool.iconSrc && <img src={tool.iconSrc} alt="" width={32} height={32} />}{tool.name}</dt>
          <dd>{tool.description}</dd>
        </div>)}
      </dl>
    </section>
  );
}
