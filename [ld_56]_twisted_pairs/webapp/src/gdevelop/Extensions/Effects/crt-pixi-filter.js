var gdjs;(function(r){r.PixiFiltersTools.registerFilterCreator("CRT",new class extends r.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(t,i){const e=new PIXI.filters.CRTFilter;return e._animationTimer=0,e}updatePreRender(t,i){const n=t;n.animationSpeed!==0&&(n.time+=i.getElapsedTime()/1e3*10*n.animationSpeed),n.animationFrequency!==0&&(n._animationTimer+=i.getElapsedTime()/1e3,n._animationTimer>=1/n.animationFrequency&&(n.seed=Math.random(),n._animationTimer=0))}updateDoubleParameter(t,i,n){const e=t;i==="lineWidth"?e.lineWidth=n:i==="lineContrast"?e.lineContrast=n:i==="noise"?e.noise=n:i==="curvature"?e.curvature=n:i==="noiseSize"?e.noiseSize=n:i==="vignetting"?e.vignetting=n:i==="vignettingAlpha"?e.vignettingAlpha=n:i==="vignettingBlur"?e.vignettingBlur=n:i==="animationSpeed"?e.animationSpeed=n:i==="animationFrequency"?e.animationFrequency=n:i==="padding"&&(e.padding=n)}getDoubleParameter(t,i){const n=t;return i==="lineWidth"?n.lineWidth:i==="lineContrast"?n.lineContrast:i==="noise"?n.noise:i==="curvature"?n.curvature:i==="noiseSize"?n.noiseSize:i==="vignetting"?n.vignetting:i==="vignettingAlpha"?n.vignettingAlpha:i==="vignettingBlur"?n.vignettingBlur:i==="animationSpeed"?n.animationSpeed:i==="animationFrequency"?n.animationFrequency:i==="padding"?n.padding:0}updateStringParameter(t,i,n){}updateColorParameter(t,i,n){}getColorParameter(t,i){return 0}updateBooleanParameter(t,i,n){const e=t;i==="verticalLine"&&(e.verticalLine=n)}getNetworkSyncData(t){const i=t;return{lw:i.lineWidth,lc:i.lineContrast,n:i.noise,c:i.curvature,ns:i.noiseSize,v:i.vignetting,va:i.vignettingAlpha,vb:i.vignettingBlur,as:i.animationSpeed,af:i.animationFrequency,p:i.padding,vl:i.verticalLine}}updateFromNetworkSyncData(t,i){const n=t;n.lineWidth=i.lw,n.lineContrast=i.lc,n.noise=i.n,n.curvature=i.c,n.noiseSize=i.ns,n.vignetting=i.v,n.vignettingAlpha=i.va,n.vignettingBlur=i.vb,n.animationSpeed=i.as,n.animationFrequency=i.af,n.padding=i.p,n.verticalLine=i.vl}})})(gdjs||(gdjs={}));
//# sourceMappingURL=crt-pixi-filter.js.map