$(document).ready(function() {
    $("#adicionar").on("click", function() {
      var tarefa = $("#tarefa").val().trim();
      if (tarefa !== "") {
        var novoItem = $("<li>").text(tarefa);
  
        novoItem.on("click", function() {
          $(this).toggleClass("tarefa-concluida");
        });
  
        $("#lista-tarefas").append(novoItem);
        $("#tarefa").val("");
      }
    });
});
  