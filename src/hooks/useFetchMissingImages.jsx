import { useEffect } from "react";
import axios from "axios";

export function useFetchMissingImages(news, setNews) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!news.length) return;

    const missingImages = news.filter((item) => !item.imageUrl);
    if (!missingImages.length) return;

    async function fetchOg(item) {
      try {
        // fetch do OG direto do browser do usuário
        const res = await fetch(item.link);
        const html = await res.text();

        const match = html.match(
          /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/
        );
        const imageUrl = match?.[1] || null;
        if (!imageUrl) return;

        // salva no banco
        await axios.patch(`${API_URL}/news/${item.id}/image`, { imageUrl });

        // atualiza estado local
        setNews((prev) =>
          prev.map((n) => (n.id === item.id ? { ...n, imageUrl } : n))
        );
      } catch (e) {
        // silencioso
      }
    }

    // processa um por vez com delay
    missingImages.reduce((promise, item) => {
      return promise.then(() =>
        fetchOg(item).then(
          () => new Promise((resolve) => setTimeout(resolve, 500))
        )
      );
    }, Promise.resolve());
  }, [news]);
}
