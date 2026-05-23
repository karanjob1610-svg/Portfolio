import { personalInfo } from "../data/personal";

export function openMailClient(subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  window.location.href = `${personalInfo.mailtoUrl}${query ? `?${query}` : ""}`;
}
