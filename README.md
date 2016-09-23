<h1>Angular2 Training Slides</h1>

<h2> Aim </h2>
<p>
	Provide a training support based on Angular2 and for Angular2.
	Slides are accessible 
	<a href="http://worldline.github.io/TrainingAngular2/gh/" target="_blank">here</a>
</p>

<h2>Environment</h2>

<p><strong>install Node.js</strong></p>

<p><a href="http://nodejs.org/">http://nodejs.org/</a></p>

<p>Make sure node and npm are in the your Path.</p>

<div class="highlight highlight-source-shell"><pre><span class="pl-c1">echo</span> <span class="pl-smi">$PATH</span></pre></div>

<p><em>if you are behind a Proxy check the NPM proxy configuration</em></p>

<div class="highlight highlight-source-shell">
	<pre>
		npm config <span class="pl-c1">set</span> proxy http://[proxy]:[PORT]
		npm config <span class="pl-c1">set</span> https-proxy http://[proxy]:[PORT]
	</pre>
</div>

<p>check also proxy variables in your environment </p>

<div class="highlight highlight-source-shell">
<pre>
	<span class="pl-c1">set</span> HTTP_PROXY=http://[proxy]:[PORT]
	<span class="pl-c1">set</span> HTTPS_PROXY=http://[proxy]:[PORT]
	<span class="pl-c1">set</span> NO_PROXY=http://[no_proxy]:[PORT];
</pre>
</div>


<p>
	To install it locally:
</p>

<ul>
	<li>Clone the repo</li>
	<li>npm install</li>
	<li>If you don't have gulp installed: npm install -g gulp</li>
	<li>npm run typings</li>
	<li>npm run jspminit</li>
	<li>npm run jspm</li>
</ul>

<p>
	To compile and run it locally
</p>

<ul>
	<li>Compile only: npm run compile</li>
	<li>Run the server only: npm run serve</li>
	<li>Run the server and compile automatically each time a file is modified: npm run dev </li>
</ul>




