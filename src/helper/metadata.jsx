import { useEffect } from 'react';

export default function Metadata(meta) {
  useEffect(() => {
    document.title = meta.title;
    document
      .querySelector('meta[name="title"]')
      .setAttribute('content', meta.metaTitle);
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', meta.metaDescription);
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute('content', meta.metaKeywords);
  }, []);

  return null;
}
