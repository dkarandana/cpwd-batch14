document.addEventListener('DOMContentLoaded',function(){


    function getCoursesList( courses ){

        var htmlOut;

    

        if( courses.length > 0){

            var ul = document.createElement('ul');

    

            courses.forEach(function( course , index){

                var li = document.createElement('li');

                var text = document.createTextNode( ++index + ' : ' + course );

            

                li.appendChild(text);

                ul.appendChild(li);

            });

    

            htmlOut = ul;

    

        }else{

            var empty = document.createElement('p');

    

            empty.appendChild( document.createTextNode('No any courses yet !!'));

            htmlOut = empty;

        }

    

        return htmlOut;

    }


    var getCoursesList = getCoursesList( ["CPWD","RHCE","RHCSA","DMI"] );

    var body = document.querySelector('body');


    body.appendChild( getCoursesList );


});



var studentData = ["Channa","Jagath","Kumara", "Charith" ,"Madu"];


/* DOM Script */



document.addEventListener('DOMContentLoaded', function(){

    var studentList = document.getElementById('student-list');


    if( studentList && studentData ){


        studentData.forEach(function( name, i ){

            var studentEle = document.createElement('li');

            var morebtn = document.createElement('button');

            var studentTextNode = document.createTextNode( ++i + ' ) ' + name );


            morebtn.innerHTML = "view";

            morebtn.setAttribute('class','primary-btn');

            morebtn.setAttribute('data-name', name );


            morebtn.addEventListener('click',function( ){

                var student = this.getAttribute('data-name');

                alert("More about " + student );

            });

            

            studentEle.appendChild( studentTextNode );

            studentEle.appendChild( morebtn );


            studentList.appendChild( studentEle );

        });


    }


});




var langList = function( languages ){

    var htmlOut;


    if( languages.length > 0 ){

        var $ul = document.createElement('ul');


        languages.forEach(function( lang ){

            /* Repeative Work */

            var $li = document.createElement('li');

            var textNode = document.createTextNode( lang );


                $li.appendChild( textNode );


                $ul.appendChild( $li );


            htmlOut = $ul ;

            /* Repeative Work */

        });


    }else{

        htmlOut = document.createElement('div');

        htmlOut.innerHTML = "Empty Data Set";

    }


    return htmlOut;

};


var DOMReady = function(){

    

    var $body = document.querySelector('body');

    var languages = [

        "JS",

        "JSX",

        "C++",

        "NodeJS"

    ];

    var langUL = langList( languages );


    $body.appendChild(langUL);

};


document.addEventListener("DOMContentLoaded",DOMReady);





dhananjaya/javascript/event-listners/language-list.js

var langList = function( languages ){

    var htmlOut;


    if( languages.length > 0 ){

        var $ul = document.createElement('ul');


            $ul.setAttribute('class','language-list');


        languages.forEach(function( lang ){


            /* Repeative Work */

            var $li = document.createElement('li');

            var textNode = document.createTextNode( lang.name );

            var $btn = document.createElement('button');


                $btn.innerText = "Show Extension";

                $btn.setAttribute('value',lang.fileExt);

    

                $li.appendChild( textNode );

                $li.appendChild($btn);

                $li.style.color = "red";


                $ul.appendChild( $li );


                /* Button Vlick Listner */

                $btn.addEventListener('click',function( e ){

                    var ext = this.value; // e.target.value

            

                    alert("File Extension is " + ext );

                });


            htmlOut = $ul ;

            /* Repeative Work */

        });


    }else{

        htmlOut = document.createElement('div');

        htmlOut.innerHTML = "Empty Data Set";

    }


    return htmlOut;

};


var DOMReady = function(){

    

    var $body = document.querySelector('body');

    var languages = [

        {

            name:"JavaScript",

            fileExt:".js"

            

        },

        {

            name:"JSX",

            fileExt:".jsx"

        },

        {

            name:"PHP",

            fileExt:".php"

        },

        {

            name:"Type Script",

            fileExt:".ts"

        }

    ];

    var langUL = langList( languages );


    $body.appendChild(langUL);

};


document.addEventListener("DOMContentLoaded",DOMReady);