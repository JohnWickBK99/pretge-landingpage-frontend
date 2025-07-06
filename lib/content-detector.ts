/**
 * Utility functions to detect and render different content types
 */

export type ContentType = 'markdown' | 'html' | 'plain';

/**
 * Detect if content is HTML by checking for HTML tags
 */
function isHTML(content: string): boolean {
    const htmlRegex = /<[^>]*>/;
    return htmlRegex.test(content);
}

/**
 * Detect if content is Markdown by checking for markdown patterns
 */
function isMarkdown(content: string): boolean {
    // Common markdown patterns
    const markdownPatterns = [
        /^#{1,6}\s+/m,           // Headers (# ## ### etc)
        /\*\*.*?\*\*/,           // Bold (**text**)
        /\*.*?\*/,               // Italic (*text*)
        /`.*?`/,                 // Inline code (`code`)
        /```[\s\S]*?```/,        // Code blocks (```code```) 
        /\[.*?\]\(.*?\)/,        // Links [text](url)
        /^\s*[-*+]\s+/m,         // Unordered lists (- * +)
        /^\s*\d+\.\s+/m,         // Ordered lists (1. 2. etc)
        /^\s*>\s+/m,             // Blockquotes (> text)
        /^\s*\|.*\|.*\|/m,       // Tables (| col | col |)
        /~~.*?~~/,               // Strikethrough (~~text~~)
        /^---$/m,                // Horizontal rules (---)
    ];

    return markdownPatterns.some(pattern => pattern.test(content));
}

/**
 * Detect content type (markdown, html, or plain text)
 */
export function detectContentType(content: string): ContentType {
    if (!content || typeof content !== 'string') {
        return 'plain';
    }

    const trimmedContent = content.trim();

    if (trimmedContent === '') {
        return 'plain';
    }

    // If content contains HTML tags, it's HTML
    if (isHTML(trimmedContent)) {
        return 'html';
    }

    // If content contains markdown patterns, it's markdown
    if (isMarkdown(trimmedContent)) {
        return 'markdown';
    }

    // Default to plain text
    return 'plain';
}

/**
 * Get content type with confidence score
 */
export function detectContentTypeWithConfidence(content: string): {
    type: ContentType;
    confidence: number;
    reasons: string[];
} {
    if (!content || typeof content !== 'string') {
        return { type: 'plain', confidence: 1, reasons: ['Empty or invalid content'] };
    }

    const trimmedContent = content.trim();
    const reasons: string[] = [];
    let htmlScore = 0;
    let markdownScore = 0;

    // Check for HTML patterns
    const htmlTags = (trimmedContent.match(/<[^>]*>/g) || []).length;
    if (htmlTags > 0) {
        htmlScore += htmlTags * 10;
        reasons.push(`Found ${htmlTags} HTML tags`);
    }

    // Check for markdown patterns
    const markdownPatterns = [
        { pattern: /^#{1,6}\s+/gm, name: 'headers', weight: 20 },
        { pattern: /\*\*.*?\*\*/g, name: 'bold text', weight: 5 },
        { pattern: /\*.*?\*/g, name: 'italic text', weight: 3 },
        { pattern: /`.*?`/g, name: 'inline code', weight: 5 },
        { pattern: /```[\s\S]*?```/g, name: 'code blocks', weight: 15 },
        { pattern: /\[.*?\]\(.*?\)/g, name: 'links', weight: 10 },
        { pattern: /^\s*[-*+]\s+/gm, name: 'unordered lists', weight: 8 },
        { pattern: /^\s*\d+\.\s+/gm, name: 'ordered lists', weight: 8 },
        { pattern: /^\s*>\s+/gm, name: 'blockquotes', weight: 10 },
        { pattern: /^\s*\|.*\|.*\|/gm, name: 'tables', weight: 15 },
        { pattern: /~~.*?~~/g, name: 'strikethrough', weight: 5 },
        { pattern: /^---$/gm, name: 'horizontal rules', weight: 10 },
    ];

    markdownPatterns.forEach(({ pattern, name, weight }) => {
        const matches = (trimmedContent.match(pattern) || []).length;
        if (matches > 0) {
            markdownScore += matches * weight;
            reasons.push(`Found ${matches} ${name}`);
        }
    });

    // Determine type based on scores
    if (htmlScore > markdownScore && htmlScore > 10) {
        return {
            type: 'html',
            confidence: Math.min(htmlScore / 100, 1),
            reasons
        };
    } else if (markdownScore > htmlScore && markdownScore > 10) {
        return {
            type: 'markdown',
            confidence: Math.min(markdownScore / 100, 1),
            reasons
        };
    } else {
        return {
            type: 'plain',
            confidence: 1,
            reasons: ['No clear HTML or markdown patterns detected']
        };
    }
} 