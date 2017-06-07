$(function () {

    $('#btnFileUpload').fileupload({
        url: 'FileUploadHandler.ashx?upload=start',
        add: function (e, data) {
            console.log('add', data);
            $('#progressbar').show();
            data.submit();

        },
        progress: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progressbar div').css('width', progress + '%');
        },
        success: function (response, status) {
            $('#progressbar').hide();
            $('#progressbar div').css('width', '0%');
            console.log('success', response);
            //alert(response + status);
            $('#ImId').val(response);
            document.getElementById('msgUpload').innerHTML = 'Uploaded Successfully';
           // document.getElementById('msgUpload').hide(5000);
        },
        error: function (error) {
            $('#progressbar').hide();
            $('#progressbar div').css('width', '0%');
            console.log('error', error);
            document.getElementById('msgUpload').innerHTML = 'Uploaded Failed';
            //document.getElementById('msgUpload').hide(5000);
        }
    });

    $(function () {
        $("#Register").unbind('click').bind('click', function () {
            var obj = {};
            obj.name = $.trim($("[id*=username]").val());
            obj.parentid = $.trim($("[id*=PId]").val());
            obj.image = $.trim($("[id*=ImId]").val());
            obj.familyid = '1';
            obj.address = $.trim($("[id*=address]").val());
            obj.emailid = $.trim($("[id*=emailid]").val());
            obj.mobile = $.trim($("[id*=mobileno]").val());

            $.ajax({
                type: "POST",
                url: "Admin.aspx/AddNewMember",
                data: JSON.stringify(obj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (r) {
                    drawChart();
                    document.getElementById('msgUpload').innerHTML = 'New Member added Successfully';

                    // alert(r.d);
                }
            });
            return false;
        });
    });


});
function drawChart() {
    var obj = {};
    obj.FamilyId = 1;
    debugger;
    alert('fdgfg');
    $.ajax({
        type: "Get",
        url: "http://api.mythriinnovations.com/services/api/tree",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {

            //  var x='onmousedown="HideMenu('contextMenu');" onmouseup="HideMenu('contextMenu');" oncontextmenu="ShowMenu('contextMenu',event);" class="detailItem">'
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Entity');
            data.addColumn('string', 'ParentEntity');
            data.addColumn('string', 'ToolTip');
            for (var i = 0; i < r.d.length; i++) {
                var memberId = r.d[i][0].toString();
                var memberName = r.d[i][1];
                var parentId = r.d[i][2] != null ? r.d[i][2].toString() : '';
                var ImageId = r.d[i][3] != null ? r.d[i][3].toString() : '';
                data.addRows([[{ v: memberId,
                    f: memberName + '<div onmousedown="HideMenu(\'contextMenu\');" onmouseup="HideMenu(\'contextMenu\');" oncontextmenu="ShowMenu(\'contextMenu\',\'' + memberName + '\',event,' + memberId + ');" class="detailItem"><img src = "Pictures/' + ImageId + '" /></div>'
                }, parentId, memberName]]);
            }
            var chart = new google.visualization.OrgChart($("#chart")[0]);
            chart.draw(data, { allowHtml: true });
        },
        failure: function (r) {
           // alert(r.d);
        },
        error: function (r) {
          //  alert(r.d);
        }
    });
}

function Deletemember(id) {
    var obj = {};
    obj.memberid = id;
    $.ajax({
        type: "POST",
        url: "Admin.aspx/DeleteMember",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            alert('Deleted');
            drawChart();
        },
        failure: function () {
            drawChart();
          //  alert(r.d);
        },
        error: function () {
            drawChart();
           // alert(r.d);
        }
    });
}


function drawChartMember() {
    var obj = {};
    obj.FamilyId = 1;
    // alert(memberId);
    $.ajax({
        type: "Get",
        url: "http://api.mythriinnovations.com/services/api/tree",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            
            //  var x='onmousedown="HideMenu('contextMenu');" onmouseup="HideMenu('contextMenu');" oncontextmenu="ShowMenu('contextMenu',event);" class="detailItem">'
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Entity');
            data.addColumn('string', 'ParentEntity');
            data.addColumn('string', 'ToolTip');
            for (var i = 1; i < r.length; i++) {

                var memberId = r[i].MemberId.toString();
                var memberName = r[i].Name.toString();
                var parentId = r[i].ParentId != null ? r[i].ParentId.toString()  : '';
                var ImageId = r[i].ImageId  != null ?  r[i].ImageId.toString() : '';
                data.addRows([[{ v: memberId,
                    f: memberName + '<div class="detailItem"><img src = "Pictures/' + ImageId + '.jpg" /></div>'
                }, parentId, memberName]]);
            }
            var chart = new google.visualization.OrgChart($("#chart")[0]);
            chart.draw(data, { allowHtml: true });
        },
        failure: function (r) {
            // alert(r.d);
        },
        error: function (r) {
            //  alert(r.d);
        }
    });
}
