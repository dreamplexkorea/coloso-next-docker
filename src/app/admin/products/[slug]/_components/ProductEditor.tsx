"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CourseDetail } from "@/lib/types";
import { ImageUploader } from "./ImageUploader";
import { SectionEditor } from "./SectionEditor";

interface ProductEditorProps {
  initialData: CourseDetail;
}

export function ProductEditor({ initialData }: ProductEditorProps) {
  const router = useRouter();
  const [data, setData] = useState<CourseDetail>(initialData);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  // 필드 업데이트 헬퍼
  function update<K extends keyof CourseDetail>(key: K, value: CourseDetail[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function updateInstructor<K extends keyof CourseDetail["instructor"]>(
    key: K,
    value: CourseDetail["instructor"][K],
  ) {
    setData((prev) => ({
      ...prev,
      instructor: { ...prev.instructor, [key]: value },
    }));
    setSaved(false);
  }

  // 저장
  async function handleSave() {
    setSaving(true);
    setError("");

    const res = await fetch(`/api/admin/products/${data.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSaved(true);
    } else {
      const err = await res.json();
      setError(err.error || "저장에 실패했습니다");
    }
    setSaving(false);
  }

  return (
    <div>
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-[24px]">
        <div>
          <button
            onClick={() => router.push("/admin/products")}
            className="text-[13px] text-gray-400 hover:text-gray-600 mb-[4px]"
          >
            &larr; 목록으로
          </button>
          <h1 className="text-[20px] font-bold text-gray-900">{data.title}</h1>
          <p className="text-[13px] text-gray-400">{data.slug}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          {saved && (
            <a
              href={`/products/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[16px] py-[9px] bg-gray-100 text-gray-700 rounded-[8px] text-[14px] hover:bg-gray-200 transition-colors"
            >
              페이지 확인하기 &rarr;
            </a>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-[20px] py-[9px] bg-blue-600 text-white rounded-[8px] text-[14px] font-medium hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
          >
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-[16px] px-[14px] py-[10px] bg-red-50 text-red-600 text-[13px] rounded-[8px]">
          {error}
        </div>
      )}

      {saved && (
        <div className="mb-[16px] px-[14px] py-[10px] bg-green-50 text-green-600 text-[13px] rounded-[8px]">
          저장되었습니다! &quot;페이지 확인하기&quot; 버튼으로 실제 페이지를 확인하세요.
        </div>
      )}

      <div className="space-y-[12px]">
        {/* ── 히어로 섹션 ── */}
        <SectionEditor title="히어로 섹션" defaultOpen>
          <ImageUploader
            slug={data.slug}
            field="hero"
            currentSrc={data.heroImageSrc}
            onUploaded={(path) => update("heroImageSrc", path)}
            label="히어로 이미지 (1200x800px 권장)"
          />

          <FieldInput
            label="헤드라인"
            value={data.heroHeadline || ""}
            onChange={(v) => update("heroHeadline", v)}
            placeholder="예: 패션으로 나를 말하다"
          />
          <FieldTextarea
            label="서브카피"
            value={data.heroSubcopy || ""}
            onChange={(v) => update("heroSubcopy", v)}
            placeholder="히어로 영역 설명 텍스트"
          />
          <FieldInput
            label="아이브로우 (상단 라벨)"
            value={data.heroEyebrow || ""}
            onChange={(v) => update("heroEyebrow", v)}
            placeholder="예: DREAMPLEX · 뷰티 진로직업체험"
          />
          <TagEditor
            label="히어로 칩"
            tags={data.heroChips || []}
            onChange={(v) => update("heroChips", v)}
          />
        </SectionEditor>

        {/* ── 기본 정보 ── */}
        <SectionEditor title="기본 정보">
          <FieldInput
            label="프로그램 제목"
            value={data.title}
            onChange={(v) => update("title", v)}
          />
          <FieldTextarea
            label="부제목"
            value={data.subtitle}
            onChange={(v) => update("subtitle", v)}
          />
          <TagEditor
            label="태그"
            tags={data.tags}
            onChange={(v) => update("tags", v)}
          />
        </SectionEditor>

        {/* ── 강사 정보 ── */}
        <SectionEditor title="강사 정보">
          <ImageUploader
            slug={data.slug}
            field="instructor"
            currentSrc={data.instructor.avatarSrc}
            onUploaded={(path) => updateInstructor("avatarSrc", path)}
            label="강사 프로필 사진"
          />
          <FieldInput
            label="강사 이름"
            value={data.instructor.name}
            onChange={(v) => updateInstructor("name", v)}
          />
          <FieldInput
            label="직함"
            value={data.instructor.role}
            onChange={(v) => updateInstructor("role", v)}
          />
          <FieldTextarea
            label="소개 (Bio)"
            value={data.instructor.bio}
            onChange={(v) => updateInstructor("bio", v)}
          />
          <FieldInput
            label="한마디 (Quote)"
            value={data.instructor.quote || ""}
            onChange={(v) => updateInstructor("quote", v)}
          />
          <StringListEditor
            label="경력 사항"
            items={data.instructor.career}
            onChange={(v) => updateInstructor("career", v)}
          />
        </SectionEditor>

        {/* ── 프로그램 소개 (Intro Sections) ── */}
        <SectionEditor title="프로그램 소개 섹션">
          {data.introSections.map((section, i) => (
            <div key={i} className="p-[14px] bg-gray-50 rounded-[8px] space-y-[12px]">
              <p className="text-[13px] font-semibold text-gray-600">섹션 {i + 1}</p>
              <FieldInput
                label="제목"
                value={section.title}
                onChange={(v) => {
                  const updated = [...data.introSections];
                  updated[i] = { ...updated[i], title: v };
                  update("introSections", updated);
                }}
              />
              <FieldTextarea
                label="설명"
                value={section.description}
                onChange={(v) => {
                  const updated = [...data.introSections];
                  updated[i] = { ...updated[i], description: v };
                  update("introSections", updated);
                }}
              />
              <ImageUploader
                slug={data.slug}
                field={`intro-${i}`}
                currentSrc={section.imageSrc}
                onUploaded={(path) => {
                  const updated = [...data.introSections];
                  updated[i] = { ...updated[i], imageSrc: path };
                  update("introSections", updated);
                }}
                label="섹션 이미지 (800x600px 권장)"
              />
            </div>
          ))}
        </SectionEditor>

        {/* ── 커리큘럼 ── */}
        <SectionEditor title="커리큘럼">
          {data.curriculum.map((chapter, ci) => (
            <div key={chapter.id} className="p-[14px] bg-gray-50 rounded-[8px] space-y-[12px]">
              <FieldInput
                label={`챕터 ${ci + 1} 제목`}
                value={chapter.title}
                onChange={(v) => {
                  const updated = [...data.curriculum];
                  updated[ci] = { ...updated[ci], title: v };
                  update("curriculum", updated);
                }}
              />
              {/* 레슨 */}
              {chapter.lessons.map((lesson, li) => (
                <div key={lesson.id} className="pl-[16px] border-l-2 border-gray-200">
                  <FieldInput
                    label={`레슨 ${li + 1} 제목`}
                    value={lesson.title}
                    onChange={(v) => {
                      const updatedCurr = [...data.curriculum];
                      const updatedLessons = [...updatedCurr[ci].lessons];
                      updatedLessons[li] = { ...updatedLessons[li], title: v };
                      updatedCurr[ci] = { ...updatedCurr[ci], lessons: updatedLessons };
                      update("curriculum", updatedCurr);
                    }}
                  />
                </div>
              ))}
              {/* 커리큘럼 이미지 */}
              <div className="space-y-[8px]">
                <label className="block text-[13px] font-medium text-gray-700">
                  챕터 {ci + 1} 이미지
                </label>
                <div className="flex gap-[8px] flex-wrap">
                  {(chapter.carouselImages || []).map((imgSrc, ii) => (
                    <div key={ii} className="w-[120px]">
                      <ImageUploader
                        slug={data.slug}
                        field={`chapter-${ci}-${ii}`}
                        currentSrc={imgSrc}
                        onUploaded={(path) => {
                          const updatedCurr = [...data.curriculum];
                          const imgs = [...(updatedCurr[ci].carouselImages || [])];
                          imgs[ii] = path;
                          updatedCurr[ci] = { ...updatedCurr[ci], carouselImages: imgs };
                          update("curriculum", updatedCurr);
                        }}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const updatedCurr = [...data.curriculum];
                    const imgs = [...(updatedCurr[ci].carouselImages || []), ""];
                    updatedCurr[ci] = { ...updatedCurr[ci], carouselImages: imgs };
                    update("curriculum", updatedCurr);
                  }}
                  className="text-[12px] text-blue-600 hover:underline"
                >
                  + 이미지 슬롯 추가
                </button>
              </div>
            </div>
          ))}
        </SectionEditor>
      </div>

      {/* 하단 저장 버튼 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 mt-[24px] -mx-[24px] px-[24px] py-[14px] flex items-center justify-between">
        <div className="text-[13px] text-gray-400">
          {saved ? "저장 완료" : "변경사항이 있습니다"}
        </div>
        <div className="flex items-center gap-[10px]">
          {saved && (
            <a
              href={`/products/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[16px] py-[9px] bg-gray-100 text-gray-700 rounded-[8px] text-[14px] hover:bg-gray-200 transition-colors"
            >
              페이지 확인하기 &rarr;
            </a>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-[20px] py-[9px] bg-blue-600 text-white rounded-[8px] text-[14px] font-medium hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
          >
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── 공통 폼 컴포넌트 ── */

function FieldInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-700 mb-[4px]">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-[10px] py-[8px] border border-gray-300 rounded-[6px] text-[14px] outline-none focus:border-blue-500"
      />
    </div>
  );
}

function FieldTextarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-700 mb-[4px]">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full px-[10px] py-[8px] border border-gray-300 rounded-[6px] text-[14px] outline-none focus:border-blue-500 resize-y"
      />
    </div>
  );
}

function TagEditor({
  label,
  tags,
  onChange,
}: {
  label: string;
  tags: string[];
  onChange: (v: string[]) => void;
}) {
  const [input, setInput] = useState("");

  function addTag() {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
      setInput("");
    }
  }

  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-700 mb-[4px]">{label}</label>
      <div className="flex flex-wrap gap-[6px] mb-[8px]">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[4px] px-[8px] py-[3px] bg-gray-100 rounded-[4px] text-[12px]"
          >
            {tag}
            <button
              type="button"
              onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
              className="text-gray-400 hover:text-red-500"
            >
              x
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-[6px]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
          placeholder="태그 입력 후 Enter"
          className="flex-1 px-[10px] py-[6px] border border-gray-300 rounded-[6px] text-[13px] outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={addTag}
          className="px-[12px] py-[6px] bg-gray-100 rounded-[6px] text-[12px] hover:bg-gray-200"
        >
          추가
        </button>
      </div>
    </div>
  );
}

function StringListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-700 mb-[4px]">{label}</label>
      <div className="space-y-[6px]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-[6px]">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = e.target.value;
                onChange(updated);
              }}
              className="flex-1 px-[10px] py-[6px] border border-gray-300 rounded-[6px] text-[13px] outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="px-[8px] text-[12px] text-red-400 hover:text-red-600"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="mt-[6px] text-[12px] text-blue-600 hover:underline"
      >
        + 항목 추가
      </button>
    </div>
  );
}
