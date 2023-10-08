import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.bfdd83ff.js";const p="/pkgs/docs/dist/assets/command.f693fd7e.png",C=JSON.parse('{"title":"命令","description":"","frontmatter":{},"headers":[],"relativePath":"command.md","filePath":"command.md"}'),o={name:"command.md"},e=l('<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p><img src="'+p+`" alt="command"></p><h2 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h2><p>描述：版本升级</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">version</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">version</span><span style="color:#BABED8;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">version</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">package</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 同步模式 | 对比模式，默认是同步模式</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--mode</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">typ</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">sync</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">diff</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># commit 的 message，默认’chore: version %s‘，%s是内部升级的包版本号</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-m,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--message</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">messag</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">message</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 版本升级后是否推送到远程仓库，默认是true</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--push</span><span style="color:#BABED8;">                   </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 版本升级后是否不推送到远程仓库，默认是false</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--no-push</span><span style="color:#BABED8;">                </span><span style="color:#C3E88D;">not</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#BABED8;">               </span><span style="color:#C3E88D;">display</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">help</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">for</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">version</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--mode=sync</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--message=’chore:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">version</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">%s‘</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--no-push=false</span></span></code></pre></div><h2 id="publish" tabindex="-1">publish <a class="header-anchor" href="#publish" aria-label="Permalink to &quot;publish&quot;">​</a></h2><p>描述：版本发布</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#BABED8;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">publish</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">package</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 同步模式 | 对比模式，默认是同步模式</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--mode</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">typ</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">sync</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">diff</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 版本升级后是否推送到远程仓库，默认是true</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--push</span><span style="color:#BABED8;">                   </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 版本升级后是否不推送到远程仓库，默认是false</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--no-push</span><span style="color:#BABED8;">                </span><span style="color:#C3E88D;">not</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#BABED8;">     </span><span style="color:#C3E88D;">display</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">help</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">for</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--mode=sync</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--no-push=false</span></span></code></pre></div><h2 id="run" tabindex="-1">run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;run&quot;">​</a></h2><p>描述：运行包命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> [options] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">cmd</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">scripts.</span></span>
<span class="line"><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">type</span><span style="color:#BABED8;">: </span><span style="color:#C3E88D;">all</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">work</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">stage</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">repository,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">default:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 基于 git 仓库对影响的包运行命令，分别对应全部 | 工作区 | 暂存区 | 版本区，默认全部</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">typ</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">all</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">work</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">stage</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">repository</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 同步模式 | 对比模式，默认是同步模式</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">--mode</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">typ</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">sync</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">diff</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#BABED8;">     </span><span style="color:#C3E88D;">display</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">help</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">for</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--type=all</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--mode=sync</span></span></code></pre></div><h2 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init&quot;">​</a></h2><p>描述：创建项目</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span><span style="color:#BABED8;"> [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">create</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">display</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">help</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">for</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">command</span></span></code></pre></div><h3 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkgs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div>`,22),t=[e];function c(r,B,y,D,i,E){return a(),n("div",null,t)}const h=s(o,[["render",c]]);export{C as __pageData,h as default};
