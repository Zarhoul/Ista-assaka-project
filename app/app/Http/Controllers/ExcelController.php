<?php

namespace App\Http\Controllers;

use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Filiere;


class ExcelController extends Controller
{
    public function importExcelToMySQL(Request $request) {
        $file = $request->file('26958dd7-72d1-4e10-b350-02b4dfaf0333');
        $data = Excel::load($file)->get();
        foreach($data as $row) {
            $rowData = $row->toArray();
            DB::table('filieres')->insert($rowData);
          }
          
          return "Data imported successfully!";

      }
      
}
