
    var table = document.getElementById("table"),sumval=0;
    for(var i=1;i<table.rows.length;i++){
        sumval=sumval+parseInt(table.rows[i].cells[2].innerHTML);
    }
    document.getElementById("val").innerHTML="sum value="+sumval;
    console.log(sumval)
