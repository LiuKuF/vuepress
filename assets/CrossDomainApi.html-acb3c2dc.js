import{_ as n,o as s,c as a,e}from"./app-a7b04161.js";const p={},t=e(`<h1 id="vue-配置代理解决跨域" tabindex="-1"><a class="header-anchor" href="#vue-配置代理解决跨域" aria-hidden="true">#</a> vue 配置代理解决跨域</h1><h2 id="_1-使用-vue-config-js-文件配置代理" tabindex="-1"><a class="header-anchor" href="#_1-使用-vue-config-js-文件配置代理" aria-hidden="true">#</a> 1. 使用 vue.config.js 文件配置代理：</h2><p>在 Vue 项目的根目录下创建一个 vue.config.js 文件，并添加以下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://api.example.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">//需要代理的https</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启跨域</span>
        <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-在需要链接的前面添加前缀-api-例如" tabindex="-1"><a class="header-anchor" href="#_2-在需要链接的前面添加前缀-api-例如" aria-hidden="true">#</a> 2. 在需要链接的前面添加前缀/api/ 例如：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$apiPost</span><span class="token punctuation">(</span><span class="token string">&#39;/api/...&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-最后需要重新启动-最后在执行一次" tabindex="-1"><a class="header-anchor" href="#_3-最后需要重新启动-最后在执行一次" aria-hidden="true">#</a> 3.最后需要重新启动 最后在执行一次</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","CrossDomainApi.html.vue"]]);export{u as default};
