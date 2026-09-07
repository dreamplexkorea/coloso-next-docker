"use client";

import { useEffect, useRef, useState } from "react";
import { buildTemplatePreviewHref, detailSectionLabels, detailTemplates, getVisibleDetailSections, type DetailSectionId, type DetailTemplateId } from "@/lib/detailTemplates";

interface PreviewProgram {
  slug: string;
  title: string;
  defaultTemplate: DetailTemplateId;
  availableSections: Record<DetailSectionId, boolean>;
}

/** 저장 기능을 가장하지 않는, 실제 상세페이지 렌더러의 비교 화면. */
export function TemplateGallery({ programs }: { programs: PreviewProgram[] }) {
  const [slug, setSlug] = useState(programs[0]?.slug ?? "");
  const [templateId, setTemplateId] = useState<DetailTemplateId>(programs[0]?.defaultTemplate ?? "school");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [fullLength, setFullLength] = useState(false);
  const [frameHeight, setFrameHeight] = useState(800);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const frameObserver = useRef<ResizeObserver | null>(null);
  useEffect(() => () => frameObserver.current?.disconnect(), []);
  const course = programs.find((program) => program.slug === slug);
  const template = detailTemplates.find((item) => item.id === templateId)!;
  if (!course) return <main className="dp-gallery"><h1>등록된 프로그램이 없습니다.</h1></main>;
  const href = buildTemplatePreviewHref(course.slug, template.id);
  const frameHref = fullLength ? `${href}&previewMode=full` : href;
  const sections = getVisibleDetailSections(template, course.availableSections);

  function selectProgram(nextSlug: string) {
    const next = programs.find((program) => program.slug === nextSlug);
    if (!next) return;
    setSlug(next.slug);
    setTemplateId(next.defaultTemplate);
  }

  function measureFrame() {
    frameObserver.current?.disconnect();
    if (!fullLength) return;
    const body = frameRef.current?.contentDocument?.body;
    if (!body) return;
    const measure = () => setFrameHeight(Math.ceil(body.getBoundingClientRect().height));
    frameObserver.current = new ResizeObserver(measure);
    frameObserver.current.observe(body);
    measure();
  }

  return <main className="dp-gallery">
    <header className="dp-gallery-header">
      <p className="dp-eyebrow">DREAMPLEX · PAGE COLLECTION</p>
      <h1>상세페이지 템플릿 비교</h1>
      <p>프로그램과 구성을 선택하고, 실제 상세페이지를 아래에서 확인하세요.</p>
    </header>

    <div className="dp-program-picker">
      <label htmlFor="preview-program">비교할 프로그램</label>
      <select id="preview-program" value={slug} onChange={(event) => selectProgram(event.target.value)}>{programs.map((program) => <option key={program.slug} value={program.slug}>{program.title}</option>)}</select>
      <p>현재 기본 구성: {detailTemplates.find((item) => item.id === course.defaultTemplate)?.name}</p>
    </div>

    <fieldset className="dp-template-picker">
      <legend>상세페이지 구성 선택</legend>
      <div className="dp-template-options">{detailTemplates.map((item) => <label key={item.id} className="dp-template-option">
        <span><input type="radio" name="detail-template" value={item.id} checked={item.id === templateId} onChange={() => setTemplateId(item.id)} /><strong>{item.name}</strong></span>
        <p>{item.firstQuestion}</p>
        <small>{item.suitableFor}</small>
      </label>)}</div>
    </fieldset>

    <details className="dp-template-map" aria-label="선택한 템플릿 구성">
      <summary>{template.name} · 구성 순서 보기</summary>
      <p>{template.description}</p>
      <ol aria-label="상세페이지 섹션 순서">{sections.map((id, index) => <li key={id}>{index + 1}. {detailSectionLabels[id]}</li>)}</ol>
    </details>

    <div className="dp-preview-toolbar">
      <fieldset><legend>미리보기 너비</legend>
        <label><input type="radio" name="preview-device" checked={device === "desktop"} onChange={() => setDevice("desktop")} />데스크톱 1120px</label>
        <label><input type="radio" name="preview-device" checked={device === "mobile"} onChange={() => setDevice("mobile")} />모바일 390px</label>
      </fieldset>
      <label className="dp-full-length-toggle"><input type="checkbox" checked={fullLength} onChange={(event) => setFullLength(event.target.checked)} />전체 길이로 보기</label>
      <a href={href} target="_blank" rel="noreferrer">미리보기 새 창에서 열기 ↗</a>
    </div>
    <p className="dp-preview-note">미리보기 선택은 저장되지 않습니다. 프로그램의 기본 구성은 그대로 유지됩니다. 화면이 좁으면 아래 미리보기를 가로로 스크롤할 수 있습니다.</p>
    <div className="dp-preview-canvas" tabIndex={0} role="region" aria-label="스크롤 가능한 상세페이지 미리보기">
      <iframe key={frameHref} ref={frameRef} src={frameHref} title={`${course.title} · ${template.name} 미리보기`} className="dp-preview-frame" style={{ width: device === "desktop" ? 1120 : 390, ...(fullLength ? { height: frameHeight } : {}) }} onLoad={measureFrame} />
    </div>
  </main>;
}
