import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none  bg-[#5a6996] text-[#0f1335] font-saira font-semibold leading-20 tracking-wider px-4 py-8 sm:px-8 overflow-hidden text-[21px] rounded-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;