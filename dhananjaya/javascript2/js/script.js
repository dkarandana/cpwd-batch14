var studentRecords = function(){

    var studentData = [{
        id:'CPWD0001',
        name:"Dhananjaya",
        email:"dhananjaya.karandana@pace.lk"
    },{
        id:'CPWD0002',
        name:"Channa",
        email:"chkumara@pace.lk"
    },{
        id:'CPWD0003',
        name:"Chathura",
        email:"chathura@pace.lk"
    }];


    /* Find index */


    var DOMReady = function(){
        var appRoot = document.getElementById('app');

        studentData.forEach(function( record , index ){
            var tNode = document.createTextNode( record.name );
            var p = document.createElement('p');
            var btn = document.createElement('button');

            btn.innerHTML = record.id;
            btn.setAttribute('data-id',record.id);

            p.appendChild( tNode );
            p.appendChild( btn );

            btn.addEventListener('click',function(){
                var id = this.getAttribute('data-id');
                var index = studentData.map(function( record ){
                    return record.id;
                }).indexOf( id );

                var student = studentData[index]
            
                alert(`
                    Reg Number ${student.id}
                    Name ${student.name}
                    Email ${student.email}
                `);

                console.log( student );
        
            });

            appRoot.appendChild( p );

        });
    };

    document.addEventListener('DOMContentLoaded',DOMReady);
}();

