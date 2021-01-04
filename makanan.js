function add(n, type) {
    var total, totalmakan, totalmakan2, totalminum, totalminum2, totalHarga;
    total = $("#" + type + n).html();
    totalmakan = $("#jmlmakan").html();
    totalmakan2 = $("#jmlmakan2").html();
    totalminum = $("#jmlminum").html();
    totalminum2 = $("#jmlminum2").html();
    total++;
    $("#" + type + n).html(total);
    if(total == 1) {
        $("#" + type + n).siblings(".btn-secondary").css("visibility", "visible");
    }

    if(type == "ayam_geprek") {
        totalmakan++;
        $("#jmlmakan").html(totalmakan);
    }
    else if(type == "ayam_goreng") {
        totalmakan2++;
        $("#jmlmakan2").html(totalmakan2);
    } else if(type == "fruit_strawberry") {
        totalminum++;
        $("#jmlminum").html(totalminum);
    } else {
        totalminum2++;
        $("#jmlminum2").html(totalminum2);
    }

    totalHarga = (totalmakan*20000) + (totalmakan2*18000) + (totalminum*15000) + (totalminum2*13000);
    $("#harga").html(totalHarga);
}

function substract(n, type) {
    var total, totalmakan, totalmakan2, totalminum, totalmakan2, totalHarga;
    total = $("#" + type + n).html();
    totalmakan = $("#jmlmakan").html();
    totalmakan2 = $("#jmlmakan2").html();
    totalminum = $("#jmlminum").html();
    totalminum2 = $("#jmlminum2").html();
    total--;
    $("#" + type + n).html(total);
    
    if(total == 0) {
        $("#" + type + n).siblings(".btn-secondary").css("visibility", "hidden");
        total = $("#" + type + n).html("");
    }

    if(type == "ayam_geprek") {
        totalmakan--;
        $("#jmlmakan").html(totalmakan);
    } 
    else if(type == "ayam_bakar") {
        totalmakan2--;
        $("#jmlmakan2").html(totalmakan2);
    } else if(type == "fruit_strawberry") {
        totalminum--;
        $("#jmlminum").html(totalminum);
    } else {
        totalminum2--;
        $("#jmlminum2").html(totalminum2);
    }


    totalHarga = (totalmakan*20000) + (totalmakan2*18000) + (totalminum*15000) + (totalminum2*13000);
    $("#harga").html(totalHarga);
}

 
$(document).ready(function() {
    $(".btn-secondary").css("visibility", "hidden");
    $("#empty").hide();
});