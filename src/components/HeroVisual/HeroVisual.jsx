import { Bot, Code2, Database, GitBranch, Network, Sparkles, Workflow } from 'lucide-react';
import './HeroVisual.scss';
export default function HeroVisual() {
  return <div className="hero-visual" aria-label="Wizualizacja architektury full-stack i AI">
      <div className="hero-visual__orbit hero-visual__orbit--one" />
      <div className="hero-visual__orbit hero-visual__orbit--two" />

      <div className="hero-visual__laptop">
        <div className="hero-visual__screen">
          <div className="hero-visual__editor">
            <div className="hero-visual__dots">
              <i className="hero-visual__window-dot" />
              <i className="hero-visual__window-dot" />
              <i className="hero-visual__window-dot" />
            </div>

            <span className="hero-visual__path">/api/agents/qualify-lead</span>
            <pre className="hero-visual__code">
              <b className="hero-visual__code-keyword">async</b> function <em className="hero-visual__code-function">runAgent</em>(lead) {'{'}
              {'  '}const context = await db.customer.find(lead);
              {'  '}const score = await ai.classify(context);
              {'  '}return automation.route(score);
              {'}'}
            </pre>
          </div>

          <div className="hero-visual__panel">
            <span className="hero-visual__panel-label">AI AUTOMATION</span>
            <strong className="hero-visual__panel-value">98.4%</strong>
            <small className="hero-visual__panel-caption">workflow success</small>
            <div className="hero-visual__bars">
              <i className="hero-visual__bar" />
              <i className="hero-visual__bar" />
              <i className="hero-visual__bar" />
              <i className="hero-visual__bar" />
              <i className="hero-visual__bar" />
            </div>
          </div>
        </div>

        <div className="hero-visual__base" />
      </div>

      <div className="hero-visual__float hero-visual__float--bot">
        <Bot />
        <span className="hero-visual__float-label">AI AGENT</span>
        <b className="hero-visual__float-status">online</b>
      </div>

      <div className="hero-visual__float hero-visual__float--api">
        <Network />
        <span className="hero-visual__float-label">REST API</span>
      </div>

      <div className="hero-visual__float hero-visual__float--db">
        <Database />
        <span className="hero-visual__float-label">DATA</span>
      </div>

      <div className="hero-visual__node hero-visual__node--code">
        <Code2 />
      </div>

      <div className="hero-visual__node hero-visual__node--flow">
        <Workflow />
      </div>

      <div className="hero-visual__node hero-visual__node--git">
        <GitBranch />
      </div>

      <div className="hero-visual__spark">
        <Sparkles />
      </div>
    </div>;
}
