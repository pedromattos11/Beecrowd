SELECT
regexp_replace(cpf, '(\d{3})(\d{3})(\d{3})(\d{2})', '\1.\2.\3-\4') AS CPF
FROM natural_person;