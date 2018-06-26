function DOMtoString(document_root) {
	var html = '';
    var sam ='' ;
    var w;
	node = document_root.firstChild;
	while (node) {
		switch (node.nodeType) {
			case Node.ELEMENT_NODE:
			html += node.outerHTML;
			break;
			case Node.TEXT_NODE:
			html += node.nodeValue;
			break;
			case Node.CDATA_SECTION_NODE:
			html += '<![CDATA[' + node.nodeValue + ']]>';
			break;
			case Node.COMMENT_NODE:
			html += '<!--' + node.nodeValue + '-->';
			break;
			case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    var obj={};
    var to,subject,body;
    try{
    	var tm=document.getElementsByName("application-name");
    	x=tm[0].content
    	if(x="Gmail")
    	{
    		var a=document.getElementsByName("to");
    		var b=document.getElementsByName("subject");
    		var c=document.getElementsByClassName("Am Al editable LW-avf")
    		obj.to=a[0].defaultValue
    		obj.subject=b[0].defaultValue
    		obj.body=c["0"].innerHTML
    		
    		   	}
    }catch(e){
    	var a=document.getElementsByClassName("_mcp_Q1 _mcp_R1 ms-font-weight-regular ms-bg-color-white-hover ms-font-color-neutralPrimary allowTextSelection _mcp_O1 textbox ms-font-s ms-fwt-sl ms-fcl-np ms-bcl-nta ms-bcl-nsa-h");
    	var b=document.getElementsByClassName("allowTextSelection customScrollBar ConsumerCED _mcp_32 ms-bg-color-white ms-font-color-black owa-font-compose");
    	var c =document.getElementsByClassName("_fp_G ms-fwt-r ms-font-color-neutralSecondary allowTextSelection ms-bgc-nl textbox ms-font-s ms-fwt-sl ms-fcl-np ms-bcl-nta ms-bcl-nsa-h hideClearButton ms-bgc-w");
    	obj.to=a["0"].value
    	obj.subject=b["0"].value
    	obj.body=JSON.parse(c["0"].textContent)
    }
   
console.log(JSON.stringify(obj))
 
    const url="https://myjen.ai/ProcessLive";

    var json = JSON.stringify(obj);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
    	sam = (xhr.responseText);
    	
    } 
    xhr.send(json);
    return sam

}   

chrome.runtime.sendMessage({
	action: "getSource",
	source: DOMtoString(document)
});