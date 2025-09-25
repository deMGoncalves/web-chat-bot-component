# Módulo WebLLM

Este módulo atua como uma **Camada Anticorrupção (ACL)** para a biblioteca `@mlc-ai/web-llm`.

## Visão Geral

O objetivo deste módulo é encapsular a inicialização e o uso do motor WebLLM, fornecendo uma interface estática e simplificada para o resto da aplicação. Isso desacopla o código do agente de IA da implementação específica do WebLLM, permitindo futuras substituições ou modificações sem impactar outras partes do sistema.

## Como Usar

Primeiro, inicialize o motor com o nome de um modelo. Depois, use o método `ask` para enviar uma pergunta.

```javascript
import { WebLLM } from '@std/artifact/webllm';

// Inicializa o motor uma vez na aplicação
WebLLM.initialize('Llama-3-8B-Instruct-q4f32_1-MLC');

// Envia uma pergunta
const systemPrompt = 'Você é um assistente prestativo.';
const userPrompt = 'O que é a vida?';

const response = await WebLLM.ask(systemPrompt, userPrompt);
console.log(response);
```
