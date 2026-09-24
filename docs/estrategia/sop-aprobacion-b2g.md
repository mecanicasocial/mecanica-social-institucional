# 📑 Manual de Procedimientos Operativos Estándar (SOP)
## Código: SOP-EST-B2G-001 | Versión: 1.0.0
## Proceso: Evaluación, Validación Algorítmica y Aprobación de Convenios B2G

---

### 1. Propósito y Alcance
Este documento establece el procedimiento estándar obligatorio para la negociación, validación técnica y aprobación formal de convenios institucionales de formación con entidades del Estado, municipalidades y gobiernos regionales (Vertical B2G). 

Aplica a todos los miembros de la Mesa Directiva, Directores Territoriales y al equipo de Gestión Tecnológica de la **ONG Mecánica Social**.

---

### 2. Roles y Responsabilidades
*   **Director de Vinculación Territorial:** Responsable de la captación inicial, levantamiento de requerimientos con el municipio y recopilación de la documentación legal.
*   **Comité de Gobernanza Algorítmica (`mecanica-social-ia`):** Encargado de procesar la solicitud institucional a través del motor analítico de IA para emitir el reporte de viabilidad y mitigar sesgos políticos.
*   **Mesa Directiva (Comité Humano):** Máximo órgano de decisión. Evalúa los reportes y ejerce el derecho a voto final para la firma del convenio.

---

### 3. Diagrama de Flujo del Proceso (Step-by-Step)

```text
 [ Fase 1: Captación ] ──► Recopilación de datos del Municipio (Cupos, Cursos)
           │
           ▼
 [ Fase 2: Ingesta IA ] ──► Ingesta de Solicitud en 'mecanica-social-ia' (Esquema int-001)
           │
           ▼
 [ Fase 3: Evaluación ] ──► Emisión de Reporte de Viabilidad Técnica y Ética
           │
           ▼
 [ Fase 4: Votación ]  ──► Sesión Extraordinaria de la Mesa Directiva (Aprobación/Rechazo)
```

---

### 4. Descripción Detallada de las Fases

#### Fase 1: Captación y Levantamiento
El Director de Vinculación Territorial se reúne con la contraparte pública (ej. Administrador Municipal o DIDECO) y completa el formulario de solicitud institucional. Se debe registrar obligatoriamente:
*   Monto del fondo presupuestario asignado o glosa de transferencia.
*   Nómina tentativa de funcionarios calificados para recibir capacitación.
*   Selección de cursos solicitados dentro de la malla modular de la **Escuela de Formación**.

#### Fase 2: Canalización e Ingesta Tecnológica
Antes de pasar a ojos de la directiva, la solicitud se digitaliza en formato JSON bajo los estándares definidos en el repositorio raíz de IA. El equipo técnico debe ejecutar el motor de validación:
```bash
# Simulación interna del pipeline de auditoría técnica
python src/ms_ia/model_client.py --input data/samples/int-001-solicitud-formacion.sample.json
```
Este proceso evalúa de forma automatizada los perfiles contra los esquemas de gobernanza (`data/schemas/int-001-solicitud-formacion.schema.json`) para detectar conflictos de interés o inconsistencias éticas.

#### Fase 3: Emisión del Reporte de Viabilidad
El motor de IA arroja un dictamen en formato cerrado (`int-001-output.schema.json`) con tres métricas de control:
1.  **Índice de Viabilidad Ética:** Garantiza que el convenio se alinee con el documento de *AI Ethics* y neutralidad institucional de la ONG.
2.  **Capacidad de Absorción Territorial:** Mide si la Escuela tiene cupos logísticos y docentes disponibles para los cursos seleccionados.
3.  **Alerta de Riesgo Institucional:** Semáforo de riesgo (Verde / Amarillo / Rojo).

#### Fase 4: Decisión Final de la Mesa Directiva
La Mesa Directiva se reúne en sesión ordinaria o extraordinaria. **Ningún convenio puede ser firmado si posee una Alerta de Riesgo en color Rojo** en el reporte de IA. 
*   Si el reporte es favorable (Verde/Amarillo), la mesa somete a votación simple la aprobación del acuerdo comercial/social.
*   Toda decisión, acta de aprobación o rechazo se almacena en el repositorio de gobernanza institucional para auditorías futuras (`docs/gobernanza/registros/`).

---
*Fin del Procedimiento Estándar.*
