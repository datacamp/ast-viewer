DIR_FRONTEND=app/static/frontend

build_antlr:
	antlr4 -Dlanguage=JavaScript $(DIR_FRONTEND)/grammar/plsql.g4

build_js:
	cd $(DIR_FRONTEND) && npm install && webpack
