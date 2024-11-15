module.exports = {
  format_date: (date) => {
    return new Date(date).toLocaleDateString();
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
  is_own_post: (post_user_id, user_id) => {
    return post_user_id === user_id;
  },
  category_icon: (category) => {
    const icons = {
      'Web Development': 'fas fa-globe',
      'Data Science': 'fas fa-database',
      'DevOps': 'fas fa-server',
      'Mobile Development': 'fas fa-mobile-alt',
      'Cybersecurity': 'fas fa-shield-alt',
      'AI/ML': 'fas fa-brain',
      'Programming Languages': 'fas fa-code',
      'Tech News': 'fas fa-newspaper'
    };
    return icons[category] || 'fas fa-code';
  },
  calculate_read_time: (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(words / wordsPerMinute);
    return `${readTime} min read`;
  },
  truncate: (text) => {
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  },
  highlight_code: (code, language) => {
    return hljs.highlight(code, {language: language || 'javascript'}).value;
  }
};
