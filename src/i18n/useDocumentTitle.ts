import { useEffect } from "react";
import { useI18n } from "./I18nProvider";

/**
 * ルートごとにタイトルを変えたいが、重いライブラリは使わない方針。
 * 翻訳キーを渡すと `document.title` を更新する。
 */
export function useDocumentTitle(titleKey: string) {
  const { t } = useI18n();
  useEffect(() => {
    document.title = t(titleKey);
  }, [t, titleKey]);
}


