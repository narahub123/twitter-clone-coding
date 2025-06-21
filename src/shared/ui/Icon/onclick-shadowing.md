# 🔧 [버그 해결] button 요소에서 onClick이 작동하지 않던 문제

## 📌 문제 요약

- `Icon` 컴포넌트에서 `button` 요소로 렌더링될 때, `onClick`을 전달했음에도 불구하고 작동하지 않음.

---

## 🔍 분석

- `onClick`의 존재 여부에 따라 `<button>` 또는 `<span>`으로 분기하는 로직은 정상적으로 작동함.
- 그러나 `<button>` 안에서의 `onClick`은 `undefined`가 되어버림.
- 콘솔 로그 또는 디버거 상에서도 이벤트가 호출되지 않음.

---

### 🐞 문제 원인

구조 분해 할당 시 `onClick` 변수를 다시 꺼내면서, 외부에서 전달된 `onClick`(props의 상위 변수)을 `shadowing(덮어쓰기)`하게 됩니다.

결과적으로 `rest` 안에는 `onClick`이 포함되어 있지 않기 때문에, `<button>` 요소에 `onClick={onClick}`을 전달했을 때 **내부적으로 `undefined`가 되어 이벤트가 작동하지 않는 버그**가 발생했습니다.

### 🔍 문제 코드

```tsx
if (typeof onClick === "function") {
  const {
    disabled = false,
    onClick,
    title,
    ...buttonProps
  } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      ref={ref as Ref<HTMLButtonElement>}
      data-title={variant === "plain" ? undefined : title}
      {...buttonProps}
    >
      <Inner />
    </button>
  );
}
```

---

### ✅ 해결 방법

구조 분해 할당 시 `onClick`을 제거하고, 상단에서 받은 `onClick`을 직접 참조하도록 수정합니다.

---

### ✏️ 수정된 코드

```tsx
if (typeof onClick === "function") {
  const {
    disabled = false,
    title,
    ...buttonProps
  } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      ref={ref as Ref<HTMLButtonElement>}
      data-title={variant === "plain" ? undefined : title}
      {...buttonProps}
    >
      <Inner />
    </button>
  );
}
```

### 🧠 기타 참고

- 구조 분해 시 동일한 이름의 변수를 꺼내면 상위 스코프의 값을 덮어쓰게 됨 (shadowing).

- 이 문제는 흔히 발생하며, React 컴포넌트에서 props 전달 시 주의가 필요함.
