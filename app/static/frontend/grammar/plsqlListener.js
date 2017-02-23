// Generated from app/static/frontend/grammar/plsql.g4 by ANTLR 4.6.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by plsqlParser.
function plsqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

plsqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
plsqlListener.prototype.constructor = plsqlListener;

// Enter a parse tree produced by plsqlParser#swallow_to_semi.
plsqlListener.prototype.enterSwallow_to_semi = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#swallow_to_semi.
plsqlListener.prototype.exitSwallow_to_semi = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#compilation_unit.
plsqlListener.prototype.enterCompilation_unit = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#compilation_unit.
plsqlListener.prototype.exitCompilation_unit = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sql_script.
plsqlListener.prototype.enterSql_script = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sql_script.
plsqlListener.prototype.exitSql_script = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#unit_statement.
plsqlListener.prototype.enterUnit_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#unit_statement.
plsqlListener.prototype.exitUnit_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_function.
plsqlListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_function.
plsqlListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_function.
plsqlListener.prototype.enterAlter_function = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_function.
plsqlListener.prototype.exitAlter_function = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_function_body.
plsqlListener.prototype.enterCreate_function_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_function_body.
plsqlListener.prototype.exitCreate_function_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#parallel_enable_clause.
plsqlListener.prototype.enterParallel_enable_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#parallel_enable_clause.
plsqlListener.prototype.exitParallel_enable_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#partition_by_clause.
plsqlListener.prototype.enterPartition_by_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#partition_by_clause.
plsqlListener.prototype.exitPartition_by_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#result_cache_clause.
plsqlListener.prototype.enterResult_cache_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#result_cache_clause.
plsqlListener.prototype.exitResult_cache_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#relies_on_part.
plsqlListener.prototype.enterRelies_on_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#relies_on_part.
plsqlListener.prototype.exitRelies_on_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#streaming_clause.
plsqlListener.prototype.enterStreaming_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#streaming_clause.
plsqlListener.prototype.exitStreaming_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_package.
plsqlListener.prototype.enterDrop_package = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_package.
plsqlListener.prototype.exitDrop_package = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_package.
plsqlListener.prototype.enterAlter_package = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_package.
plsqlListener.prototype.exitAlter_package = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_package.
plsqlListener.prototype.enterCreate_package = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_package.
plsqlListener.prototype.exitCreate_package = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#package_body.
plsqlListener.prototype.enterPackage_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#package_body.
plsqlListener.prototype.exitPackage_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#package_spec.
plsqlListener.prototype.enterPackage_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#package_spec.
plsqlListener.prototype.exitPackage_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#package_obj_spec.
plsqlListener.prototype.enterPackage_obj_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#package_obj_spec.
plsqlListener.prototype.exitPackage_obj_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#procedure_spec.
plsqlListener.prototype.enterProcedure_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#procedure_spec.
plsqlListener.prototype.exitProcedure_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_spec.
plsqlListener.prototype.enterFunction_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_spec.
plsqlListener.prototype.exitFunction_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#package_obj_body.
plsqlListener.prototype.enterPackage_obj_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#package_obj_body.
plsqlListener.prototype.exitPackage_obj_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_procedure.
plsqlListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_procedure.
plsqlListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_procedure.
plsqlListener.prototype.enterAlter_procedure = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_procedure.
plsqlListener.prototype.exitAlter_procedure = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_procedure_body.
plsqlListener.prototype.enterCreate_procedure_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_procedure_body.
plsqlListener.prototype.exitCreate_procedure_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_trigger.
plsqlListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_trigger.
plsqlListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_trigger.
plsqlListener.prototype.enterAlter_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_trigger.
plsqlListener.prototype.exitAlter_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_trigger.
plsqlListener.prototype.enterCreate_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_trigger.
plsqlListener.prototype.exitCreate_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#trigger_follows_clause.
plsqlListener.prototype.enterTrigger_follows_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#trigger_follows_clause.
plsqlListener.prototype.exitTrigger_follows_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#trigger_when_clause.
plsqlListener.prototype.enterTrigger_when_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#trigger_when_clause.
plsqlListener.prototype.exitTrigger_when_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#simple_dml_trigger.
plsqlListener.prototype.enterSimple_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#simple_dml_trigger.
plsqlListener.prototype.exitSimple_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_each_row.
plsqlListener.prototype.enterFor_each_row = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_each_row.
plsqlListener.prototype.exitFor_each_row = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#compound_dml_trigger.
plsqlListener.prototype.enterCompound_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#compound_dml_trigger.
plsqlListener.prototype.exitCompound_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#non_dml_trigger.
plsqlListener.prototype.enterNon_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#non_dml_trigger.
plsqlListener.prototype.exitNon_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#trigger_body.
plsqlListener.prototype.enterTrigger_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#trigger_body.
plsqlListener.prototype.exitTrigger_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#routine_clause.
plsqlListener.prototype.enterRoutine_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#routine_clause.
plsqlListener.prototype.exitRoutine_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#compound_trigger_block.
plsqlListener.prototype.enterCompound_trigger_block = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#compound_trigger_block.
plsqlListener.prototype.exitCompound_trigger_block = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#timing_point_section.
plsqlListener.prototype.enterTiming_point_section = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#timing_point_section.
plsqlListener.prototype.exitTiming_point_section = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#non_dml_event.
plsqlListener.prototype.enterNon_dml_event = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#non_dml_event.
plsqlListener.prototype.exitNon_dml_event = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dml_event_clause.
plsqlListener.prototype.enterDml_event_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dml_event_clause.
plsqlListener.prototype.exitDml_event_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dml_event_element.
plsqlListener.prototype.enterDml_event_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dml_event_element.
plsqlListener.prototype.exitDml_event_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dml_event_nested_clause.
plsqlListener.prototype.enterDml_event_nested_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dml_event_nested_clause.
plsqlListener.prototype.exitDml_event_nested_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#referencing_clause.
plsqlListener.prototype.enterReferencing_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#referencing_clause.
plsqlListener.prototype.exitReferencing_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#referencing_element.
plsqlListener.prototype.enterReferencing_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#referencing_element.
plsqlListener.prototype.exitReferencing_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_type.
plsqlListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_type.
plsqlListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_type.
plsqlListener.prototype.enterAlter_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_type.
plsqlListener.prototype.exitAlter_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#compile_type_clause.
plsqlListener.prototype.enterCompile_type_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#compile_type_clause.
plsqlListener.prototype.exitCompile_type_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#replace_type_clause.
plsqlListener.prototype.enterReplace_type_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#replace_type_clause.
plsqlListener.prototype.exitReplace_type_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_method_spec.
plsqlListener.prototype.enterAlter_method_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_method_spec.
plsqlListener.prototype.exitAlter_method_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_method_element.
plsqlListener.prototype.enterAlter_method_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_method_element.
plsqlListener.prototype.exitAlter_method_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_attribute_definition.
plsqlListener.prototype.enterAlter_attribute_definition = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_attribute_definition.
plsqlListener.prototype.exitAlter_attribute_definition = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#attribute_definition.
plsqlListener.prototype.enterAttribute_definition = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#attribute_definition.
plsqlListener.prototype.exitAttribute_definition = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_collection_clauses.
plsqlListener.prototype.enterAlter_collection_clauses = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_collection_clauses.
plsqlListener.prototype.exitAlter_collection_clauses = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dependent_handling_clause.
plsqlListener.prototype.enterDependent_handling_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dependent_handling_clause.
plsqlListener.prototype.exitDependent_handling_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dependent_exceptions_part.
plsqlListener.prototype.enterDependent_exceptions_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dependent_exceptions_part.
plsqlListener.prototype.exitDependent_exceptions_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_type.
plsqlListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_type.
plsqlListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_definition.
plsqlListener.prototype.enterType_definition = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_definition.
plsqlListener.prototype.exitType_definition = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#object_type_def.
plsqlListener.prototype.enterObject_type_def = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#object_type_def.
plsqlListener.prototype.exitObject_type_def = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#object_as_part.
plsqlListener.prototype.enterObject_as_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#object_as_part.
plsqlListener.prototype.exitObject_as_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#object_under_part.
plsqlListener.prototype.enterObject_under_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#object_under_part.
plsqlListener.prototype.exitObject_under_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#nested_table_type_def.
plsqlListener.prototype.enterNested_table_type_def = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#nested_table_type_def.
plsqlListener.prototype.exitNested_table_type_def = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sqlj_object_type.
plsqlListener.prototype.enterSqlj_object_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sqlj_object_type.
plsqlListener.prototype.exitSqlj_object_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_body.
plsqlListener.prototype.enterType_body = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_body.
plsqlListener.prototype.exitType_body = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_body_elements.
plsqlListener.prototype.enterType_body_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_body_elements.
plsqlListener.prototype.exitType_body_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#map_order_func_declaration.
plsqlListener.prototype.enterMap_order_func_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#map_order_func_declaration.
plsqlListener.prototype.exitMap_order_func_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subprog_decl_in_type.
plsqlListener.prototype.enterSubprog_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subprog_decl_in_type.
plsqlListener.prototype.exitSubprog_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#proc_decl_in_type.
plsqlListener.prototype.enterProc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#proc_decl_in_type.
plsqlListener.prototype.exitProc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#func_decl_in_type.
plsqlListener.prototype.enterFunc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#func_decl_in_type.
plsqlListener.prototype.exitFunc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#constructor_declaration.
plsqlListener.prototype.enterConstructor_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#constructor_declaration.
plsqlListener.prototype.exitConstructor_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#modifier_clause.
plsqlListener.prototype.enterModifier_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#modifier_clause.
plsqlListener.prototype.exitModifier_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#object_member_spec.
plsqlListener.prototype.enterObject_member_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#object_member_spec.
plsqlListener.prototype.exitObject_member_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sqlj_object_type_attr.
plsqlListener.prototype.enterSqlj_object_type_attr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sqlj_object_type_attr.
plsqlListener.prototype.exitSqlj_object_type_attr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#element_spec.
plsqlListener.prototype.enterElement_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#element_spec.
plsqlListener.prototype.exitElement_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#element_spec_options.
plsqlListener.prototype.enterElement_spec_options = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#element_spec_options.
plsqlListener.prototype.exitElement_spec_options = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subprogram_spec.
plsqlListener.prototype.enterSubprogram_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subprogram_spec.
plsqlListener.prototype.exitSubprogram_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_procedure_spec.
plsqlListener.prototype.enterType_procedure_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_procedure_spec.
plsqlListener.prototype.exitType_procedure_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_function_spec.
plsqlListener.prototype.enterType_function_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_function_spec.
plsqlListener.prototype.exitType_function_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#constructor_spec.
plsqlListener.prototype.enterConstructor_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#constructor_spec.
plsqlListener.prototype.exitConstructor_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#map_order_function_spec.
plsqlListener.prototype.enterMap_order_function_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#map_order_function_spec.
plsqlListener.prototype.exitMap_order_function_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pragma_clause.
plsqlListener.prototype.enterPragma_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pragma_clause.
plsqlListener.prototype.exitPragma_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pragma_elements.
plsqlListener.prototype.enterPragma_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pragma_elements.
plsqlListener.prototype.exitPragma_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_elements_parameter.
plsqlListener.prototype.enterType_elements_parameter = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_elements_parameter.
plsqlListener.prototype.exitType_elements_parameter = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#drop_sequence.
plsqlListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#drop_sequence.
plsqlListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alter_sequence.
plsqlListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alter_sequence.
plsqlListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#create_sequence.
plsqlListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#create_sequence.
plsqlListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sequence_spec.
plsqlListener.prototype.enterSequence_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sequence_spec.
plsqlListener.prototype.exitSequence_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sequence_start_clause.
plsqlListener.prototype.enterSequence_start_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sequence_start_clause.
plsqlListener.prototype.exitSequence_start_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#invoker_rights_clause.
plsqlListener.prototype.enterInvoker_rights_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#invoker_rights_clause.
plsqlListener.prototype.exitInvoker_rights_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#compiler_parameters_clause.
plsqlListener.prototype.enterCompiler_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#compiler_parameters_clause.
plsqlListener.prototype.exitCompiler_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#call_spec.
plsqlListener.prototype.enterCall_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#call_spec.
plsqlListener.prototype.exitCall_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#java_spec.
plsqlListener.prototype.enterJava_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#java_spec.
plsqlListener.prototype.exitJava_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#c_spec.
plsqlListener.prototype.enterC_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#c_spec.
plsqlListener.prototype.exitC_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#c_agent_in_clause.
plsqlListener.prototype.enterC_agent_in_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#c_agent_in_clause.
plsqlListener.prototype.exitC_agent_in_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#c_parameters_clause.
plsqlListener.prototype.enterC_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#c_parameters_clause.
plsqlListener.prototype.exitC_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#parameter.
plsqlListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#parameter.
plsqlListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#default_value_part.
plsqlListener.prototype.enterDefault_value_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#default_value_part.
plsqlListener.prototype.exitDefault_value_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#declare_spec.
plsqlListener.prototype.enterDeclare_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#declare_spec.
plsqlListener.prototype.exitDeclare_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#variable_declaration.
plsqlListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#variable_declaration.
plsqlListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subtype_declaration.
plsqlListener.prototype.enterSubtype_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subtype_declaration.
plsqlListener.prototype.exitSubtype_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_declaration.
plsqlListener.prototype.enterCursor_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_declaration.
plsqlListener.prototype.exitCursor_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#parameter_spec.
plsqlListener.prototype.enterParameter_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#parameter_spec.
plsqlListener.prototype.exitParameter_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#exception_declaration.
plsqlListener.prototype.enterException_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#exception_declaration.
plsqlListener.prototype.exitException_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pragma_declaration.
plsqlListener.prototype.enterPragma_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pragma_declaration.
plsqlListener.prototype.exitPragma_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#record_declaration.
plsqlListener.prototype.enterRecord_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#record_declaration.
plsqlListener.prototype.exitRecord_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#record_type_dec.
plsqlListener.prototype.enterRecord_type_dec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#record_type_dec.
plsqlListener.prototype.exitRecord_type_dec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#field_spec.
plsqlListener.prototype.enterField_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#field_spec.
plsqlListener.prototype.exitField_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#record_var_dec.
plsqlListener.prototype.enterRecord_var_dec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#record_var_dec.
plsqlListener.prototype.exitRecord_var_dec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_declaration.
plsqlListener.prototype.enterTable_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_declaration.
plsqlListener.prototype.exitTable_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_type_dec.
plsqlListener.prototype.enterTable_type_dec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_type_dec.
plsqlListener.prototype.exitTable_type_dec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_indexed_by_part.
plsqlListener.prototype.enterTable_indexed_by_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_indexed_by_part.
plsqlListener.prototype.exitTable_indexed_by_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#varray_type_def.
plsqlListener.prototype.enterVarray_type_def = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#varray_type_def.
plsqlListener.prototype.exitVarray_type_def = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_var_dec.
plsqlListener.prototype.enterTable_var_dec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_var_dec.
plsqlListener.prototype.exitTable_var_dec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#seq_of_statements.
plsqlListener.prototype.enterSeq_of_statements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#seq_of_statements.
plsqlListener.prototype.exitSeq_of_statements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#label_declaration.
plsqlListener.prototype.enterLabel_declaration = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#label_declaration.
plsqlListener.prototype.exitLabel_declaration = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#statement.
plsqlListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#statement.
plsqlListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#assignment_statement.
plsqlListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#assignment_statement.
plsqlListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#continue_statement.
plsqlListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#continue_statement.
plsqlListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#exit_statement.
plsqlListener.prototype.enterExit_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#exit_statement.
plsqlListener.prototype.exitExit_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#goto_statement.
plsqlListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#goto_statement.
plsqlListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#if_statement.
plsqlListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#if_statement.
plsqlListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#elsif_part.
plsqlListener.prototype.enterElsif_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#elsif_part.
plsqlListener.prototype.exitElsif_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#else_part.
plsqlListener.prototype.enterElse_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#else_part.
plsqlListener.prototype.exitElse_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#loop_statement.
plsqlListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#loop_statement.
plsqlListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_loop_param.
plsqlListener.prototype.enterCursor_loop_param = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_loop_param.
plsqlListener.prototype.exitCursor_loop_param = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#forall_statement.
plsqlListener.prototype.enterForall_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#forall_statement.
plsqlListener.prototype.exitForall_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#bounds_clause.
plsqlListener.prototype.enterBounds_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#bounds_clause.
plsqlListener.prototype.exitBounds_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#between_bound.
plsqlListener.prototype.enterBetween_bound = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#between_bound.
plsqlListener.prototype.exitBetween_bound = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#lower_bound.
plsqlListener.prototype.enterLower_bound = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#lower_bound.
plsqlListener.prototype.exitLower_bound = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#upper_bound.
plsqlListener.prototype.enterUpper_bound = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#upper_bound.
plsqlListener.prototype.exitUpper_bound = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#null_statement.
plsqlListener.prototype.enterNull_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#null_statement.
plsqlListener.prototype.exitNull_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#raise_statement.
plsqlListener.prototype.enterRaise_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#raise_statement.
plsqlListener.prototype.exitRaise_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#return_statement.
plsqlListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#return_statement.
plsqlListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_call.
plsqlListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_call.
plsqlListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#body.
plsqlListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#body.
plsqlListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#exception_handler.
plsqlListener.prototype.enterException_handler = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#exception_handler.
plsqlListener.prototype.exitException_handler = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#trigger_block.
plsqlListener.prototype.enterTrigger_block = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#trigger_block.
plsqlListener.prototype.exitTrigger_block = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#block.
plsqlListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#block.
plsqlListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sql_statement.
plsqlListener.prototype.enterSql_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sql_statement.
plsqlListener.prototype.exitSql_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#execute_immediate.
plsqlListener.prototype.enterExecute_immediate = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#execute_immediate.
plsqlListener.prototype.exitExecute_immediate = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dynamic_returning_clause.
plsqlListener.prototype.enterDynamic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dynamic_returning_clause.
plsqlListener.prototype.exitDynamic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#data_manipulation_language_statements.
plsqlListener.prototype.enterData_manipulation_language_statements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#data_manipulation_language_statements.
plsqlListener.prototype.exitData_manipulation_language_statements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_manipulation_statements.
plsqlListener.prototype.enterCursor_manipulation_statements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_manipulation_statements.
plsqlListener.prototype.exitCursor_manipulation_statements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#close_statement.
plsqlListener.prototype.enterClose_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#close_statement.
plsqlListener.prototype.exitClose_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#open_statement.
plsqlListener.prototype.enterOpen_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#open_statement.
plsqlListener.prototype.exitOpen_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#fetch_statement.
plsqlListener.prototype.enterFetch_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#fetch_statement.
plsqlListener.prototype.exitFetch_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#open_for_statement.
plsqlListener.prototype.enterOpen_for_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#open_for_statement.
plsqlListener.prototype.exitOpen_for_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#transaction_control_statements.
plsqlListener.prototype.enterTransaction_control_statements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#transaction_control_statements.
plsqlListener.prototype.exitTransaction_control_statements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#set_transaction_command.
plsqlListener.prototype.enterSet_transaction_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#set_transaction_command.
plsqlListener.prototype.exitSet_transaction_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#set_constraint_command.
plsqlListener.prototype.enterSet_constraint_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#set_constraint_command.
plsqlListener.prototype.exitSet_constraint_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#commit_statement.
plsqlListener.prototype.enterCommit_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#commit_statement.
plsqlListener.prototype.exitCommit_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#write_clause.
plsqlListener.prototype.enterWrite_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#write_clause.
plsqlListener.prototype.exitWrite_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#rollback_statement.
plsqlListener.prototype.enterRollback_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#rollback_statement.
plsqlListener.prototype.exitRollback_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#savepoint_statement.
plsqlListener.prototype.enterSavepoint_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#savepoint_statement.
plsqlListener.prototype.exitSavepoint_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#explain_statement.
plsqlListener.prototype.enterExplain_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#explain_statement.
plsqlListener.prototype.exitExplain_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#select_statement.
plsqlListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#select_statement.
plsqlListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subquery_factoring_clause.
plsqlListener.prototype.enterSubquery_factoring_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subquery_factoring_clause.
plsqlListener.prototype.exitSubquery_factoring_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#factoring_element.
plsqlListener.prototype.enterFactoring_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#factoring_element.
plsqlListener.prototype.exitFactoring_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#search_clause.
plsqlListener.prototype.enterSearch_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#search_clause.
plsqlListener.prototype.exitSearch_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cycle_clause.
plsqlListener.prototype.enterCycle_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cycle_clause.
plsqlListener.prototype.exitCycle_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#SubqueryParen.
plsqlListener.prototype.enterSubqueryParen = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#SubqueryParen.
plsqlListener.prototype.exitSubqueryParen = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IgnoreSubquery.
plsqlListener.prototype.enterIgnoreSubquery = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IgnoreSubquery.
plsqlListener.prototype.exitIgnoreSubquery = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#SubqueryCompound.
plsqlListener.prototype.enterSubqueryCompound = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#SubqueryCompound.
plsqlListener.prototype.exitSubqueryCompound = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subquery_operation_part.
plsqlListener.prototype.enterSubquery_operation_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subquery_operation_part.
plsqlListener.prototype.exitSubquery_operation_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#query_block.
plsqlListener.prototype.enterQuery_block = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#query_block.
plsqlListener.prototype.exitQuery_block = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#Star1.
plsqlListener.prototype.enterStar1 = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#Star1.
plsqlListener.prototype.exitStar1 = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#StarTable.
plsqlListener.prototype.enterStarTable = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#StarTable.
plsqlListener.prototype.exitStarTable = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IgnoreTableview_name.
plsqlListener.prototype.enterIgnoreTableview_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IgnoreTableview_name.
plsqlListener.prototype.exitIgnoreTableview_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#Alias_expr.
plsqlListener.prototype.enterAlias_expr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#Alias_expr.
plsqlListener.prototype.exitAlias_expr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#from_clause.
plsqlListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#from_clause.
plsqlListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_ref_list.
plsqlListener.prototype.enterTable_ref_list = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_ref_list.
plsqlListener.prototype.exitTable_ref_list = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_ref.
plsqlListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_ref.
plsqlListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_ref_aux.
plsqlListener.prototype.enterTable_ref_aux = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_ref_aux.
plsqlListener.prototype.exitTable_ref_aux = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#join_clause.
plsqlListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#join_clause.
plsqlListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#join_on_part.
plsqlListener.prototype.enterJoin_on_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#join_on_part.
plsqlListener.prototype.exitJoin_on_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#join_using_part.
plsqlListener.prototype.enterJoin_using_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#join_using_part.
plsqlListener.prototype.exitJoin_using_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#outer_join_type.
plsqlListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#outer_join_type.
plsqlListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#query_partition_clause.
plsqlListener.prototype.enterQuery_partition_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#query_partition_clause.
plsqlListener.prototype.exitQuery_partition_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#flashback_query_clause.
plsqlListener.prototype.enterFlashback_query_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#flashback_query_clause.
plsqlListener.prototype.exitFlashback_query_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_clause.
plsqlListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_clause.
plsqlListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_element.
plsqlListener.prototype.enterPivot_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_element.
plsqlListener.prototype.exitPivot_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_for_clause.
plsqlListener.prototype.enterPivot_for_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_for_clause.
plsqlListener.prototype.exitPivot_for_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_in_clause.
plsqlListener.prototype.enterPivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_in_clause.
plsqlListener.prototype.exitPivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_in_clause_element.
plsqlListener.prototype.enterPivot_in_clause_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_in_clause_element.
plsqlListener.prototype.exitPivot_in_clause_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#pivot_in_clause_elements.
plsqlListener.prototype.enterPivot_in_clause_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#pivot_in_clause_elements.
plsqlListener.prototype.exitPivot_in_clause_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#unpivot_clause.
plsqlListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#unpivot_clause.
plsqlListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#unpivot_in_clause.
plsqlListener.prototype.enterUnpivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#unpivot_in_clause.
plsqlListener.prototype.exitUnpivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#unpivot_in_elements.
plsqlListener.prototype.enterUnpivot_in_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#unpivot_in_elements.
plsqlListener.prototype.exitUnpivot_in_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#hierarchical_query_clause.
plsqlListener.prototype.enterHierarchical_query_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#hierarchical_query_clause.
plsqlListener.prototype.exitHierarchical_query_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#start_part.
plsqlListener.prototype.enterStart_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#start_part.
plsqlListener.prototype.exitStart_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#group_by_clause.
plsqlListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#group_by_clause.
plsqlListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#group_by_elements.
plsqlListener.prototype.enterGroup_by_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#group_by_elements.
plsqlListener.prototype.exitGroup_by_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#rollup_cube_clause.
plsqlListener.prototype.enterRollup_cube_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#rollup_cube_clause.
plsqlListener.prototype.exitRollup_cube_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#grouping_sets_clause.
plsqlListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#grouping_sets_clause.
plsqlListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#grouping_sets_elements.
plsqlListener.prototype.enterGrouping_sets_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#grouping_sets_elements.
plsqlListener.prototype.exitGrouping_sets_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#having_clause.
plsqlListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#having_clause.
plsqlListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_clause.
plsqlListener.prototype.enterModel_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_clause.
plsqlListener.prototype.exitModel_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cell_reference_options.
plsqlListener.prototype.enterCell_reference_options = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cell_reference_options.
plsqlListener.prototype.exitCell_reference_options = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#return_rows_clause.
plsqlListener.prototype.enterReturn_rows_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#return_rows_clause.
plsqlListener.prototype.exitReturn_rows_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#reference_model.
plsqlListener.prototype.enterReference_model = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#reference_model.
plsqlListener.prototype.exitReference_model = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#main_model.
plsqlListener.prototype.enterMain_model = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#main_model.
plsqlListener.prototype.exitMain_model = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_column_clauses.
plsqlListener.prototype.enterModel_column_clauses = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_column_clauses.
plsqlListener.prototype.exitModel_column_clauses = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_column_partition_part.
plsqlListener.prototype.enterModel_column_partition_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_column_partition_part.
plsqlListener.prototype.exitModel_column_partition_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_column_list.
plsqlListener.prototype.enterModel_column_list = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_column_list.
plsqlListener.prototype.exitModel_column_list = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_column.
plsqlListener.prototype.enterModel_column = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_column.
plsqlListener.prototype.exitModel_column = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_rules_clause.
plsqlListener.prototype.enterModel_rules_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_rules_clause.
plsqlListener.prototype.exitModel_rules_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_rules_part.
plsqlListener.prototype.enterModel_rules_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_rules_part.
plsqlListener.prototype.exitModel_rules_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_rules_element.
plsqlListener.prototype.enterModel_rules_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_rules_element.
plsqlListener.prototype.exitModel_rules_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cell_assignment.
plsqlListener.prototype.enterCell_assignment = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cell_assignment.
plsqlListener.prototype.exitCell_assignment = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_iterate_clause.
plsqlListener.prototype.enterModel_iterate_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_iterate_clause.
plsqlListener.prototype.exitModel_iterate_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#until_part.
plsqlListener.prototype.enterUntil_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#until_part.
plsqlListener.prototype.exitUntil_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#order_by_clause.
plsqlListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#order_by_clause.
plsqlListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#order_by_elements.
plsqlListener.prototype.enterOrder_by_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#order_by_elements.
plsqlListener.prototype.exitOrder_by_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_update_clause.
plsqlListener.prototype.enterFor_update_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_update_clause.
plsqlListener.prototype.exitFor_update_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_update_of_part.
plsqlListener.prototype.enterFor_update_of_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_update_of_part.
plsqlListener.prototype.exitFor_update_of_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_update_options.
plsqlListener.prototype.enterFor_update_options = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_update_options.
plsqlListener.prototype.exitFor_update_options = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#limit_clause.
plsqlListener.prototype.enterLimit_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#limit_clause.
plsqlListener.prototype.exitLimit_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#update_statement.
plsqlListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#update_statement.
plsqlListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#update_set_clause.
plsqlListener.prototype.enterUpdate_set_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#update_set_clause.
plsqlListener.prototype.exitUpdate_set_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#column_based_update_set_clause.
plsqlListener.prototype.enterColumn_based_update_set_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#column_based_update_set_clause.
plsqlListener.prototype.exitColumn_based_update_set_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#delete_statement.
plsqlListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#delete_statement.
plsqlListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#insert_statement.
plsqlListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#insert_statement.
plsqlListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#single_table_insert.
plsqlListener.prototype.enterSingle_table_insert = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#single_table_insert.
plsqlListener.prototype.exitSingle_table_insert = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#multi_table_insert.
plsqlListener.prototype.enterMulti_table_insert = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#multi_table_insert.
plsqlListener.prototype.exitMulti_table_insert = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#multi_table_element.
plsqlListener.prototype.enterMulti_table_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#multi_table_element.
plsqlListener.prototype.exitMulti_table_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#conditional_insert_clause.
plsqlListener.prototype.enterConditional_insert_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#conditional_insert_clause.
plsqlListener.prototype.exitConditional_insert_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#conditional_insert_when_part.
plsqlListener.prototype.enterConditional_insert_when_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#conditional_insert_when_part.
plsqlListener.prototype.exitConditional_insert_when_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#conditional_insert_else_part.
plsqlListener.prototype.enterConditional_insert_else_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#conditional_insert_else_part.
plsqlListener.prototype.exitConditional_insert_else_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#insert_into_clause.
plsqlListener.prototype.enterInsert_into_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#insert_into_clause.
plsqlListener.prototype.exitInsert_into_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#values_clause.
plsqlListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#values_clause.
plsqlListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#merge_statement.
plsqlListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#merge_statement.
plsqlListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#merge_update_clause.
plsqlListener.prototype.enterMerge_update_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#merge_update_clause.
plsqlListener.prototype.exitMerge_update_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#merge_element.
plsqlListener.prototype.enterMerge_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#merge_element.
plsqlListener.prototype.exitMerge_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#merge_update_delete_part.
plsqlListener.prototype.enterMerge_update_delete_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#merge_update_delete_part.
plsqlListener.prototype.exitMerge_update_delete_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#merge_insert_clause.
plsqlListener.prototype.enterMerge_insert_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#merge_insert_clause.
plsqlListener.prototype.exitMerge_insert_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#selected_tableview.
plsqlListener.prototype.enterSelected_tableview = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#selected_tableview.
plsqlListener.prototype.exitSelected_tableview = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#lock_table_statement.
plsqlListener.prototype.enterLock_table_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#lock_table_statement.
plsqlListener.prototype.exitLock_table_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#wait_nowait_part.
plsqlListener.prototype.enterWait_nowait_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#wait_nowait_part.
plsqlListener.prototype.exitWait_nowait_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#lock_table_element.
plsqlListener.prototype.enterLock_table_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#lock_table_element.
plsqlListener.prototype.exitLock_table_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#lock_mode.
plsqlListener.prototype.enterLock_mode = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#lock_mode.
plsqlListener.prototype.exitLock_mode = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#general_table_ref.
plsqlListener.prototype.enterGeneral_table_ref = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#general_table_ref.
plsqlListener.prototype.exitGeneral_table_ref = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#static_returning_clause.
plsqlListener.prototype.enterStatic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#static_returning_clause.
plsqlListener.prototype.exitStatic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#error_logging_clause.
plsqlListener.prototype.enterError_logging_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#error_logging_clause.
plsqlListener.prototype.exitError_logging_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#error_logging_into_part.
plsqlListener.prototype.enterError_logging_into_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#error_logging_into_part.
plsqlListener.prototype.exitError_logging_into_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#error_logging_reject_part.
plsqlListener.prototype.enterError_logging_reject_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#error_logging_reject_part.
plsqlListener.prototype.exitError_logging_reject_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dml_table_expression_clause.
plsqlListener.prototype.enterDml_table_expression_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dml_table_expression_clause.
plsqlListener.prototype.exitDml_table_expression_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_collection_expression.
plsqlListener.prototype.enterTable_collection_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_collection_expression.
plsqlListener.prototype.exitTable_collection_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#subquery_restriction_clause.
plsqlListener.prototype.enterSubquery_restriction_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#subquery_restriction_clause.
plsqlListener.prototype.exitSubquery_restriction_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sample_clause.
plsqlListener.prototype.enterSample_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sample_clause.
plsqlListener.prototype.exitSample_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#seed_part.
plsqlListener.prototype.enterSeed_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#seed_part.
plsqlListener.prototype.exitSeed_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_expression.
plsqlListener.prototype.enterCursor_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_expression.
plsqlListener.prototype.exitCursor_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#expression_list.
plsqlListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#expression_list.
plsqlListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#condition.
plsqlListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#condition.
plsqlListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IgnoreExpr.
plsqlListener.prototype.enterIgnoreExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IgnoreExpr.
plsqlListener.prototype.exitIgnoreExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#AndExpr.
plsqlListener.prototype.enterAndExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#AndExpr.
plsqlListener.prototype.exitAndExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#RelExpr.
plsqlListener.prototype.enterRelExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#RelExpr.
plsqlListener.prototype.exitRelExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#MemberExpr.
plsqlListener.prototype.enterMemberExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#MemberExpr.
plsqlListener.prototype.exitMemberExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#CursorExpr.
plsqlListener.prototype.enterCursorExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#CursorExpr.
plsqlListener.prototype.exitCursorExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IsExpr.
plsqlListener.prototype.enterIsExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IsExpr.
plsqlListener.prototype.exitIsExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#NotExpr.
plsqlListener.prototype.enterNotExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#NotExpr.
plsqlListener.prototype.exitNotExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#InExpr.
plsqlListener.prototype.enterInExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#InExpr.
plsqlListener.prototype.exitInExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#ParenExpr.
plsqlListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#ParenExpr.
plsqlListener.prototype.exitParenExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#OrExpr.
plsqlListener.prototype.enterOrExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#OrExpr.
plsqlListener.prototype.exitOrExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#is_part.
plsqlListener.prototype.enterIs_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#is_part.
plsqlListener.prototype.exitIs_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#in_part.
plsqlListener.prototype.enterIn_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#in_part.
plsqlListener.prototype.exitIn_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_part.
plsqlListener.prototype.enterCursor_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_part.
plsqlListener.prototype.exitCursor_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#multiset_type.
plsqlListener.prototype.enterMultiset_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#multiset_type.
plsqlListener.prototype.exitMultiset_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#relational_operator.
plsqlListener.prototype.enterRelational_operator = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#relational_operator.
plsqlListener.prototype.exitRelational_operator = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#like_type.
plsqlListener.prototype.enterLike_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#like_type.
plsqlListener.prototype.exitLike_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#like_escape_part.
plsqlListener.prototype.enterLike_escape_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#like_escape_part.
plsqlListener.prototype.exitLike_escape_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#in_elements.
plsqlListener.prototype.enterIn_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#in_elements.
plsqlListener.prototype.exitIn_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#between_elements.
plsqlListener.prototype.enterBetween_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#between_elements.
plsqlListener.prototype.exitBetween_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#concatenation.
plsqlListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#concatenation.
plsqlListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#BinaryExpr.
plsqlListener.prototype.enterBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#BinaryExpr.
plsqlListener.prototype.exitBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IgnoreBinaryExpr.
plsqlListener.prototype.enterIgnoreBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IgnoreBinaryExpr.
plsqlListener.prototype.exitIgnoreBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#ParenBinaryExpr.
plsqlListener.prototype.enterParenBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#ParenBinaryExpr.
plsqlListener.prototype.exitParenBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#interval_expression.
plsqlListener.prototype.enterInterval_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#interval_expression.
plsqlListener.prototype.exitInterval_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_expression.
plsqlListener.prototype.enterModel_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_expression.
plsqlListener.prototype.exitModel_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#model_expression_element.
plsqlListener.prototype.enterModel_expression_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#model_expression_element.
plsqlListener.prototype.exitModel_expression_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#single_column_for_loop.
plsqlListener.prototype.enterSingle_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#single_column_for_loop.
plsqlListener.prototype.exitSingle_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_like_part.
plsqlListener.prototype.enterFor_like_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_like_part.
plsqlListener.prototype.exitFor_like_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#for_increment_decrement_type.
plsqlListener.prototype.enterFor_increment_decrement_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#for_increment_decrement_type.
plsqlListener.prototype.exitFor_increment_decrement_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#multi_column_for_loop.
plsqlListener.prototype.enterMulti_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#multi_column_for_loop.
plsqlListener.prototype.exitMulti_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#IgnoreUnaryExpr.
plsqlListener.prototype.enterIgnoreUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#IgnoreUnaryExpr.
plsqlListener.prototype.exitIgnoreUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#UnaryExpr.
plsqlListener.prototype.enterUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#UnaryExpr.
plsqlListener.prototype.exitUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#case_statement.
plsqlListener.prototype.enterCase_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#case_statement.
plsqlListener.prototype.exitCase_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#simple_case_statement.
plsqlListener.prototype.enterSimple_case_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#simple_case_statement.
plsqlListener.prototype.exitSimple_case_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#simple_case_when_part.
plsqlListener.prototype.enterSimple_case_when_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#simple_case_when_part.
plsqlListener.prototype.exitSimple_case_when_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#searched_case_statement.
plsqlListener.prototype.enterSearched_case_statement = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#searched_case_statement.
plsqlListener.prototype.exitSearched_case_statement = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#searched_case_when_part.
plsqlListener.prototype.enterSearched_case_when_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#searched_case_when_part.
plsqlListener.prototype.exitSearched_case_when_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#case_else_part.
plsqlListener.prototype.enterCase_else_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#case_else_part.
plsqlListener.prototype.exitCase_else_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#atom.
plsqlListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#atom.
plsqlListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#expression_or_vector.
plsqlListener.prototype.enterExpression_or_vector = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#expression_or_vector.
plsqlListener.prototype.exitExpression_or_vector = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#vector_expr.
plsqlListener.prototype.enterVector_expr = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#vector_expr.
plsqlListener.prototype.exitVector_expr = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#quantified_expression.
plsqlListener.prototype.enterQuantified_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#quantified_expression.
plsqlListener.prototype.exitQuantified_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#standard_function.
plsqlListener.prototype.enterStandard_function = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#standard_function.
plsqlListener.prototype.exitStandard_function = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#over_clause_keyword.
plsqlListener.prototype.enterOver_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#over_clause_keyword.
plsqlListener.prototype.exitOver_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#within_or_over_clause_keyword.
plsqlListener.prototype.enterWithin_or_over_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#within_or_over_clause_keyword.
plsqlListener.prototype.exitWithin_or_over_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#standard_prediction_function_keyword.
plsqlListener.prototype.enterStandard_prediction_function_keyword = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#standard_prediction_function_keyword.
plsqlListener.prototype.exitStandard_prediction_function_keyword = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#over_clause.
plsqlListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#over_clause.
plsqlListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#windowing_clause.
plsqlListener.prototype.enterWindowing_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#windowing_clause.
plsqlListener.prototype.exitWindowing_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#windowing_type.
plsqlListener.prototype.enterWindowing_type = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#windowing_type.
plsqlListener.prototype.exitWindowing_type = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#windowing_elements.
plsqlListener.prototype.enterWindowing_elements = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#windowing_elements.
plsqlListener.prototype.exitWindowing_elements = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#using_clause.
plsqlListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#using_clause.
plsqlListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#using_element.
plsqlListener.prototype.enterUsing_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#using_element.
plsqlListener.prototype.exitUsing_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#collect_order_by_part.
plsqlListener.prototype.enterCollect_order_by_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#collect_order_by_part.
plsqlListener.prototype.exitCollect_order_by_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#within_or_over_part.
plsqlListener.prototype.enterWithin_or_over_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#within_or_over_part.
plsqlListener.prototype.exitWithin_or_over_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cost_matrix_clause.
plsqlListener.prototype.enterCost_matrix_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cost_matrix_clause.
plsqlListener.prototype.exitCost_matrix_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_passing_clause.
plsqlListener.prototype.enterXml_passing_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_passing_clause.
plsqlListener.prototype.exitXml_passing_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_attributes_clause.
plsqlListener.prototype.enterXml_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_attributes_clause.
plsqlListener.prototype.exitXml_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_namespaces_clause.
plsqlListener.prototype.enterXml_namespaces_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_namespaces_clause.
plsqlListener.prototype.exitXml_namespaces_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_table_column.
plsqlListener.prototype.enterXml_table_column = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_table_column.
plsqlListener.prototype.exitXml_table_column = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_general_default_part.
plsqlListener.prototype.enterXml_general_default_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_general_default_part.
plsqlListener.prototype.exitXml_general_default_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_multiuse_expression_element.
plsqlListener.prototype.enterXml_multiuse_expression_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_multiuse_expression_element.
plsqlListener.prototype.exitXml_multiuse_expression_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xmlroot_param_version_part.
plsqlListener.prototype.enterXmlroot_param_version_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xmlroot_param_version_part.
plsqlListener.prototype.exitXmlroot_param_version_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xmlroot_param_standalone_part.
plsqlListener.prototype.enterXmlroot_param_standalone_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xmlroot_param_standalone_part.
plsqlListener.prototype.exitXmlroot_param_standalone_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xmlserialize_param_enconding_part.
plsqlListener.prototype.enterXmlserialize_param_enconding_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xmlserialize_param_enconding_part.
plsqlListener.prototype.exitXmlserialize_param_enconding_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xmlserialize_param_version_part.
plsqlListener.prototype.enterXmlserialize_param_version_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xmlserialize_param_version_part.
plsqlListener.prototype.exitXmlserialize_param_version_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xmlserialize_param_ident_part.
plsqlListener.prototype.enterXmlserialize_param_ident_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xmlserialize_param_ident_part.
plsqlListener.prototype.exitXmlserialize_param_ident_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sql_plus_command.
plsqlListener.prototype.enterSql_plus_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sql_plus_command.
plsqlListener.prototype.exitSql_plus_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#whenever_command.
plsqlListener.prototype.enterWhenever_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#whenever_command.
plsqlListener.prototype.exitWhenever_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#set_command.
plsqlListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#set_command.
plsqlListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#exit_command.
plsqlListener.prototype.enterExit_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#exit_command.
plsqlListener.prototype.exitExit_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#prompt_command.
plsqlListener.prototype.enterPrompt_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#prompt_command.
plsqlListener.prototype.exitPrompt_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#show_errors_command.
plsqlListener.prototype.enterShow_errors_command = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#show_errors_command.
plsqlListener.prototype.exitShow_errors_command = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#partition_extension_clause.
plsqlListener.prototype.enterPartition_extension_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#partition_extension_clause.
plsqlListener.prototype.exitPartition_extension_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#column_alias.
plsqlListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#column_alias.
plsqlListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_alias.
plsqlListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_alias.
plsqlListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#alias_quoted_string.
plsqlListener.prototype.enterAlias_quoted_string = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#alias_quoted_string.
plsqlListener.prototype.exitAlias_quoted_string = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#where_clause.
plsqlListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#where_clause.
plsqlListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#current_of_clause.
plsqlListener.prototype.enterCurrent_of_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#current_of_clause.
plsqlListener.prototype.exitCurrent_of_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#into_clause.
plsqlListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#into_clause.
plsqlListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#xml_column_name.
plsqlListener.prototype.enterXml_column_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#xml_column_name.
plsqlListener.prototype.exitXml_column_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cost_class_name.
plsqlListener.prototype.enterCost_class_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cost_class_name.
plsqlListener.prototype.exitCost_class_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#attribute_name.
plsqlListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#attribute_name.
plsqlListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#savepoint_name.
plsqlListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#savepoint_name.
plsqlListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#rollback_segment_name.
plsqlListener.prototype.enterRollback_segment_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#rollback_segment_name.
plsqlListener.prototype.exitRollback_segment_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_var_name.
plsqlListener.prototype.enterTable_var_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_var_name.
plsqlListener.prototype.exitTable_var_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#schema_name.
plsqlListener.prototype.enterSchema_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#schema_name.
plsqlListener.prototype.exitSchema_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#routine_name.
plsqlListener.prototype.enterRoutine_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#routine_name.
plsqlListener.prototype.exitRoutine_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#package_name.
plsqlListener.prototype.enterPackage_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#package_name.
plsqlListener.prototype.exitPackage_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#implementation_type_name.
plsqlListener.prototype.enterImplementation_type_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#implementation_type_name.
plsqlListener.prototype.exitImplementation_type_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#parameter_name.
plsqlListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#parameter_name.
plsqlListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#reference_model_name.
plsqlListener.prototype.enterReference_model_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#reference_model_name.
plsqlListener.prototype.exitReference_model_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#main_model_name.
plsqlListener.prototype.enterMain_model_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#main_model_name.
plsqlListener.prototype.exitMain_model_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#aggregate_function_name.
plsqlListener.prototype.enterAggregate_function_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#aggregate_function_name.
plsqlListener.prototype.exitAggregate_function_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#query_name.
plsqlListener.prototype.enterQuery_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#query_name.
plsqlListener.prototype.exitQuery_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#constraint_name.
plsqlListener.prototype.enterConstraint_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#constraint_name.
plsqlListener.prototype.exitConstraint_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#label_name.
plsqlListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#label_name.
plsqlListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_name.
plsqlListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_name.
plsqlListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#sequence_name.
plsqlListener.prototype.enterSequence_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#sequence_name.
plsqlListener.prototype.exitSequence_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#exception_name.
plsqlListener.prototype.enterException_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#exception_name.
plsqlListener.prototype.exitException_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_name.
plsqlListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_name.
plsqlListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#procedure_name.
plsqlListener.prototype.enterProcedure_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#procedure_name.
plsqlListener.prototype.exitProcedure_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#trigger_name.
plsqlListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#trigger_name.
plsqlListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#variable_name.
plsqlListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#variable_name.
plsqlListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#index_name.
plsqlListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#index_name.
plsqlListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#cursor_name.
plsqlListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#cursor_name.
plsqlListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#record_name.
plsqlListener.prototype.enterRecord_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#record_name.
plsqlListener.prototype.exitRecord_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#collection_name.
plsqlListener.prototype.enterCollection_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#collection_name.
plsqlListener.prototype.exitCollection_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#link_name.
plsqlListener.prototype.enterLink_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#link_name.
plsqlListener.prototype.exitLink_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#column_name.
plsqlListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#column_name.
plsqlListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#tableview_name.
plsqlListener.prototype.enterTableview_name = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#tableview_name.
plsqlListener.prototype.exitTableview_name = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#dot_id.
plsqlListener.prototype.enterDot_id = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#dot_id.
plsqlListener.prototype.exitDot_id = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#star.
plsqlListener.prototype.enterStar = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#star.
plsqlListener.prototype.exitStar = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#keep_clause.
plsqlListener.prototype.enterKeep_clause = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#keep_clause.
plsqlListener.prototype.exitKeep_clause = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_argument.
plsqlListener.prototype.enterFunction_argument = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_argument.
plsqlListener.prototype.exitFunction_argument = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_argument_analytic.
plsqlListener.prototype.enterFunction_argument_analytic = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_argument_analytic.
plsqlListener.prototype.exitFunction_argument_analytic = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#function_argument_modeling.
plsqlListener.prototype.enterFunction_argument_modeling = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#function_argument_modeling.
plsqlListener.prototype.exitFunction_argument_modeling = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#respect_or_ignore_nulls.
plsqlListener.prototype.enterRespect_or_ignore_nulls = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#respect_or_ignore_nulls.
plsqlListener.prototype.exitRespect_or_ignore_nulls = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#argument.
plsqlListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#argument.
plsqlListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#type_spec.
plsqlListener.prototype.enterType_spec = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#type_spec.
plsqlListener.prototype.exitType_spec = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#datatype.
plsqlListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#datatype.
plsqlListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#precision_part.
plsqlListener.prototype.enterPrecision_part = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#precision_part.
plsqlListener.prototype.exitPrecision_part = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#native_datatype_element.
plsqlListener.prototype.enterNative_datatype_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#native_datatype_element.
plsqlListener.prototype.exitNative_datatype_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#bind_variable.
plsqlListener.prototype.enterBind_variable = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#bind_variable.
plsqlListener.prototype.exitBind_variable = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#FuncCall.
plsqlListener.prototype.enterFuncCall = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#FuncCall.
plsqlListener.prototype.exitFuncCall = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#Identifier.
plsqlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#Identifier.
plsqlListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#table_element.
plsqlListener.prototype.enterTable_element = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#table_element.
plsqlListener.prototype.exitTable_element = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#constant.
plsqlListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#constant.
plsqlListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#numeric.
plsqlListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#numeric.
plsqlListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#numeric_negative.
plsqlListener.prototype.enterNumeric_negative = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#numeric_negative.
plsqlListener.prototype.exitNumeric_negative = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#quoted_string.
plsqlListener.prototype.enterQuoted_string = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#quoted_string.
plsqlListener.prototype.exitQuoted_string = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#r_id.
plsqlListener.prototype.enterR_id = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#r_id.
plsqlListener.prototype.exitR_id = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#id_expression.
plsqlListener.prototype.enterId_expression = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#id_expression.
plsqlListener.prototype.exitId_expression = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#not_equal_op.
plsqlListener.prototype.enterNot_equal_op = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#not_equal_op.
plsqlListener.prototype.exitNot_equal_op = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#greater_than_or_equals_op.
plsqlListener.prototype.enterGreater_than_or_equals_op = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#greater_than_or_equals_op.
plsqlListener.prototype.exitGreater_than_or_equals_op = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#less_than_or_equals_op.
plsqlListener.prototype.enterLess_than_or_equals_op = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#less_than_or_equals_op.
plsqlListener.prototype.exitLess_than_or_equals_op = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#concatenation_op.
plsqlListener.prototype.enterConcatenation_op = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#concatenation_op.
plsqlListener.prototype.exitConcatenation_op = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#outer_join_sign.
plsqlListener.prototype.enterOuter_join_sign = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#outer_join_sign.
plsqlListener.prototype.exitOuter_join_sign = function(ctx) {
};


// Enter a parse tree produced by plsqlParser#regular_id.
plsqlListener.prototype.enterRegular_id = function(ctx) {
};

// Exit a parse tree produced by plsqlParser#regular_id.
plsqlListener.prototype.exitRegular_id = function(ctx) {
};



exports.plsqlListener = plsqlListener;