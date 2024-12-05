# Stardust-Javascript
An Javascript port of the amazing Stardust Particle System.

Early working demo:
https://howlingmadz.github.io/Stardust-Javascript/


I noticed there didn't seem to be a particle solution that I would like to see for simple html5 websites, so I decided I am going to try to port one from as3, at least the parts I need, and eventually maybe with a few fixes that the other doesn't have.

Documentation I first found:
https://wiki.starling-framework.org/extensions/stardust-engine

Original StarDust (2009 - 2011):
https://code.google.com/archive/p/stardust-particle-engine/

Plumbee's Fork of Stardust (2013 - 2016):
https://github.com/plumbee/stardust-library-plumbee

Matyasf's Fork of Plumbee's Fork of Stardust (2013 - 2016):
https://github.com/matyasf/stardust-library-plumbee

***

Online Flash Editor for Stardust SDE files:
https://s3-eu-west-1.amazonaws.com/s3.funkypandagame.com/startdust-particle-editor/stardust-editor.html

AS3 Loader:
https://github.com/matyasf/stardust-sim-loader
(This helps load the editor build SDE files so designers can tweak particles without the need for a programmer to code them)

***



One way to install currently, is to download and install the 'stardust air app': 
https://github.com/matyasf/stardust-air/blob/master/Stardust-Desktop.air

It will try to load the editor .swf from a server that no longer hosts it, so instead, get a swf from here: 
https://github.com/matyasf/stardust-editor/tags

And move it into: 
%userprofile%\AppData\Roaming\com.matyasf.stardustAIR\Local Store

Be sure it's named: "stardust_editor.swf"

When you launch the air.app it will take a few seconds to look for the file on the server before eventually loading it locally. The screen is gray the whole time. If it takes over 5 seconds, something may be wrong.
