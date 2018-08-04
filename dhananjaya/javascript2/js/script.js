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