function call_python(){
    $.ajax({
      type: "POST",
      url: "~/pytest.py",
      data: { param: text}
    }).done(read_the_file(name) {
        var my_test =[];
        for (i=0; i=< my_race.length; i++){
        if ( my_race[i][1]=== "chien"){
            var anim  = my_test.push(my_race[i][0]);
        };

        };
    

    });
};
console.log(call_python());