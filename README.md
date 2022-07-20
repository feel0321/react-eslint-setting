# eslint setting 저장용

airbnb 규칙을 기본으로 rule을 수정한 개인용 eslint setting 입니다

rule은 계속 추가되거나 수정될 수 있습니다

## react/jsx-filename-extension

jsx 문법은 .jsx 파일에서만 가능하다는 규칙

```json
{
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }]
  }
}
```

.tsx 파일에서도 jsx 문법을 허용한다

## import/extensions

확장자명 생략에 대한 규칙

```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
}
```

.ts와 .tsx는 확장자를 생략하도록 허용

## import/no-unresolved

> npm i -D eslint-import-resolver-typescript

```json
{
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

typescript에서 오류 수정

## react/function-component-definition

컴포넌트 코드 작성 규칙

```json
{
  "rules": {
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ]
  }
}
```

화살표 함수만 가능하도록 설정

## prettier/prettier

```json
{
  "rules": {
    "prettier/prettier": "off"
  }
}
```

eslint + prettier 충돌을 막도록 수정

## no-nested-ternary

삼항 연산자를 금지하는 규칙

```json
{
  "rules": {
    "no-nested-ternary": "off"
  }
}
```

삼항 연산자를 허용하도록 설정

## no-unused-vars

사용하지 않는 변수가 있으면 에러가 나는 규칙

```json
{
  "rules": {
    "no-unused-vars": "warn"
  }
}
```

사용하지 않는 변수를 경고로 수정, 개발 완료 시 경고가 있는 사용하지 않는 변수를 수동으로 삭제

## no-console

console이 있으면 에러가 나는 규칙

```json
{
  "no-console": "warn"
}
```

console이 있으면 경고로 수정, 개발 완료 시 console을 수동으로 삭제

## import/prefer-default-export

한 파일에서 export가 1개일 경우 에러가 나는 규칙, export default로 바꾼다

```json
{
  "rules": {
    "import/prefer-default-export": "warn"
  }
}
```

한 파일에서 export가 1개일 경우 경고로 수정, 개발 완료 시 export가 1개면 수동으로 export default로 바꾼다
