let text = `A Teoria da Relatividade Geral, proposta por Albert Einstein em 1915, é uma teoria da gravitação que revolucionou nossa compreensão do espaço, tempo e universo.  Ao contrário da lei da gravitação universal de Newton, que descreve a gravidade como uma força que atua instantaneamente à distância, a Relatividade Geral a descreve como uma **curvatura do espaço-tempo**.
          Aqui estão os pontos principais:
          
          * **Espaço-tempo:** A Relatividade Geral une o espaço e o tempo em um único contínuo quadridimensional chamado espaço-tempo.  Imagine uma superfície elástica.  Se você colocar uma bola de boliche no centro, ela criará uma depressão.  Essa depressão representa a curvatura do espaço-tempo causada pela massa da bola.
          
          * **Massa e Curvatura:**  Objetos massivos, como planetas e estrelas, curvam o espaço-tempo ao seu redor.  Quanto maior a massa, maior a curvatura.  Essa curvatura é o que percebemos como gravidade.  Os objetos não são "puxados" pela gravidade, mas sim seguem os caminhos mais curtos (geodésicas) através do espaço-tempo curvado.  Imagine uma bola rolando na superfície elástica: ela seguirá a curva criada pela bola de boliche.
          
          * **Geodésicas:**  São os caminhos mais curtos entre dois pontos no espaço-tempo curvado.  Para objetos sem propulsão, como uma bola rolando na superfície elástica, a geodésica é a trajetória que eles seguem.  Planetas orbitam estrelas porque seguem as geodésicas no espaço-tempo curvado pela massa da estrela.
          
          * **Equivalência entre massa inercial e gravitacional:**  Einstein postulou que a massa inercial (resistência de um objeto à aceleração) e a massa gravitacional (a força com que um objeto é atraído pela gravidade) são equivalentes.  Isso é demonstrado no famoso "experimento do elevador": você não consegue distinguir entre estar em um elevador acelerando para cima e estar parado em um campo gravitacional.
          
          * **Previsões da Relatividade Geral:** A teoria fez previsões que foram confirmadas experimentalmente, incluindo:
              * **A curvatura da luz:** A luz também segue as geodésicas e, portanto, sua trajetória é afetada pela gravidade.  Isso foi observado durante eclipses solares.
              * **A precessão do periélio de Mercúrio:** A órbita de Mercúrio apresenta uma pequena variação (precessão) que não podia ser explicada pela lei da gravitação de Newton, mas é perfeitamente prevista pela Relatividade Geral.
              * **Ondas gravitacionais:** Ondulações no espaço-tempo que se propagam à velocidade da luz.  Sua existência foi prevista por Einstein e detectada pela primeira vez em 2015.
              * **Dilatação do tempo gravitacional:** O tempo passa mais lentamente em campos gravitacionais mais fortes.
          
          * **Limitações:** A Relatividade Geral não é uma teoria completa.  Ela não é compatível com a mecânica quântica, e não consegue explicar o interior dos buracos negros ou a singularidade do Big Bang.  Cientistas estão buscando uma teoria da gravidade quântica que unifique essas duas teorias.
          

          Em resumo, a Relatividade Geral substitui a ideia de uma força gravitacional por uma geometria do espaço-tempo.  A massa curva o espaço-tempo, e os objetos movem-se ao longo das geodésicas desse espaço-tempo curvado. É uma teoria complexa, mas suas implicações são profundas e revolucionaram nossa compreensão do universo.  Para uma compreensão mais profunda, é necessário o estudo de matemática avançada, especialmente geometria diferencial e cálculo tensorial. 
          &#96&#96&#96 python
import math

def calcular():
    """Realiza cálculos matemáticos com base na entrada do usuário."""

    try:
        operacao = input("Escolha uma operação (+, -, *, /, **, raiz, sen, cos, tan): ").lower()
        if operacao in ["+", "-", "*", "/", "**"]:
            num1 = float(input("Digite o primeiro número: "))
            num2 = float(input("Digite o segundo número: "))

            if operacao == "+":
                resultado = num1 + num2
            elif operacao == "-":
                resultado = num1 - num2
            elif operacao == "*":
                resultado = num1 * num2
            elif operacao == "/":
                if num2 == 0:
                    raise ZeroDivisionError("Divisão por zero não permitida.")
                resultado = num1 / num2
            elif operacao == "**":
                resultado = num1 ** num2

            print(f"Resultado: {resultado}")

        elif operacao == "raiz":
            num = float(input("Digite o número: "))
            if num < 0:
                raise ValueError("Raiz quadrada de número negativo não permitida.")
            resultado = math.sqrt(num)
            print(f"Resultado (raiz quadrada): {resultado}")

        elif operacao in ["sen", "cos", "tan"]:
            angulo_graus = float(input("Digite o ângulo em graus: "))
            angulo_rad = math.radians(angulo_graus)  # Converter graus para radianos

            if operacao == "sen":
                resultado = math.sin(angulo_rad)
            elif operacao == "cos":
                resultado = math.cos(angulo_rad)
            elif operacao == "tan":
                resultado = math.tan(angulo_rad)

            print(f"Resultado ({operacao}): {resultado}")

        else:
            print("Operação inválida.")

    except ValueError as e:
        print(f"Erro de valor: {e}")
    except ZeroDivisionError as e:
        print(f"Erro: {e}")
    except Exception as e:
        print(f"Ocorreu um erro inesperado: {e}")


if __name__ == "__main__":
    calcular()
&#96&#96&#96


          
          `;



function formatText(text) {
    let newText = text.split('\n');
    newText = newText.map(line => line.replace(/^\s{4,}/, '')).join('\n');
    newText = newText.replace(/&#96&#96&#96/g, "```");
    newText = newText.replace(/``` python/g, "```python"); // Fix highlight for Python code blocks

    // Extract the first value after ```
    const firstValueMatch = newText.match(/```(.*?)\n/);
    const firstValue = firstValueMatch ? firstValueMatch[1].trim() : null;

    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value;
        }
    });

    newText = newText.replace(/^[ \t]{4,}\*/gm, '*');
    newText = newText.replace(/\*\*(.*?)\*\*/g, "<span class='forte'>$1</span>");
    newText = marked.parse(newText);

    hljs.highlightAll();

    return newText


}


